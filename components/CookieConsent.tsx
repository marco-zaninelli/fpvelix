"use client";

import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function CookieConsent() {
    const [cookies, setCookie] = useCookies(["ga_consent"]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!cookies.ga_consent) setShow(true);
    }, [cookies]);

    const accept = () => {
        setCookie("ga_consent", "true", { path: "/", maxAge: 365 * 24 * 60 * 60 });
        setShow(false);
    };

    if (!show) return null;

    return (
        <div style={{
            position: "fixed", bottom: 0, width: "100%", background: "#000", color: "#fff",
            padding: "1rem", textAlign: "center", zIndex: 9999
        }}>
            <span>We use cookies to improve your experience. By accepting, you agree to our tracking.</span>
            <button style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }} onClick={accept} className={"cursor-pointer"}>
                Accept
            </button>
        </div>
    );
}
