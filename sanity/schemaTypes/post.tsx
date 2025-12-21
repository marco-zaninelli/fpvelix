import React from 'react'
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.max(160).warning('Descriptions longer than 160 characters may be truncated in Google search results.'),
        }),
        defineField({
            name: 'thumbnailVideoId',
            description: 'The numeric ID for the 5-second preview loop.',
            type: 'string',
            validation: (Rule) =>
                Rule.required().custom((value) => {
                    if (!value) return true;
                    if (value.includes('vimeo.com')) return 'Enter only the ID, not the URL.';
                    return /^\d+(\/[a-z0-9]+)?$/.test(value) ? true : 'Invalid Vimeo ID.';
                }),
        }),
        defineField({
            name: 'videoId',
            description: 'The unique ID from the full Vimeo video URL.',
            type: 'string',
            validation: (Rule) =>
                Rule.required().custom((value) => {
                    if (!value) return true;
                    if (value.includes('vimeo.com')) return 'Enter only the ID, not the URL.';
                    return /^\d+(\/[a-z0-9]+)?$/.test(value) ? true : 'Invalid Vimeo ID.';
                }),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            videoId: 'videoId',
        },
        prepare({title, videoId}) {
            const cleanId = videoId ? videoId.split('/')[0] : ''
            return {
                title: title || 'Untitled',
                subtitle: videoId ? `Vimeo ID: ${videoId}` : 'No video',
                media: videoId ? (
                    <img
                        src={`https://vumbnail.com/${cleanId}.jpg`}
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        alt=""
                    />
                ) : undefined,
            }
        },
    },
})