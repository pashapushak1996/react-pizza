import React from "react"
import ContentLoader from "react-content-loader"

export const Loader = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="126" cy="142" r="115" />
        <rect x="36" y="275" rx="12" ry="12" width="180" height="28" />
        <rect x="0" y="320" rx="8" ry="8" width="259" height="64" />
        <rect x="1" y="413" rx="15" ry="15" width="77" height="30" />
        <rect x="167" y="413" rx="16" ry="16" width="92" height="30" />
    </ContentLoader>
)
