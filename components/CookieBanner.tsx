'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"

declare global {
    interface Window {
        dataLayer: any[]
    }
}

export function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false)
    const t = useTranslations('cookie')
    const pathname = usePathname()

    useEffect(() => {
        // 1. Check if user has already accepted
        const consent = localStorage.getItem("cookie-consent")

        if (consent === "accepted") {
            setShowBanner(false)
            loadGoogleAnalytics()
        } else {
            // If no consent or previously declined, show banner
            setShowBanner(true)
        }

        // 2. Logic to handle cookie removal from Privacy Page
        const handleRemoveCookies = () => {
            localStorage.clear()

            const cookies = document.cookie.split(";")
            const hostname = window.location.hostname

            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i]
                const eqPos = cookie.indexOf("=")
                const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim()

                // Delete for current path
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`

                // Delete for exact hostname
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${hostname};`

                // Delete for main domain (handling .example.com)
                const domainParts = hostname.split('.')
                if (domainParts.length >= 2) {
                    const mainDomain = `.${domainParts.slice(-2).join('.')}`
                    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${mainDomain};`
                }
            }

            // Redirect to current page to clear app state and re-trigger banner
            window.location.href = window.location.pathname
        }

        window.addEventListener("remove-all-cookies", handleRemoveCookies)

        return () => {
            window.removeEventListener("remove-all-cookies", handleRemoveCookies)
        }
    }, [pathname]) // Re-run check on every page change

    const loadGoogleAnalytics = () => {
        const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID
        if (!GA_MEASUREMENT_ID || document.getElementById("google-analytics-script")) return

        const script = document.createElement("script")
        script.id = "google-analytics-script"
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
        script.async = true
        document.head.appendChild(script)

        window.dataLayer = window.dataLayer || []
        function gtag(...args: any[]) {
            window.dataLayer.push(args)
        }
        gtag("js", new Date())
        gtag("config", GA_MEASUREMENT_ID)
    }

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted")
        setShowBanner(false)
        loadGoogleAnalytics()
    }

    const declineCookies = () => {
        // We do NOT save anything to localStorage.
        // This hides it for the current view, but since 'cookie-consent'
        // remains null, it will show again on the next page load.
        setShowBanner(false)
    }

    if (!showBanner) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-800">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="mb-2 font-semibold text-white">{t("title")}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {t("message")}{" "}
                            <Link href="/cookie-and-privacy" className="underline hover:text-white transition-colors">
                                {t("more")}
                            </Link>
                        </p>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <button
                            onClick={declineCookies}
                            className="flex-1 md:flex-none px-4 py-2 rounded-md text-sm font-medium bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer"
                        >
                            {t("decline")}
                        </button>
                        <button
                            onClick={acceptCookies}
                            className="flex-1 md:flex-none px-4 py-2 rounded-md text-sm font-medium bg-white text-black hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                            {t("accept")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}