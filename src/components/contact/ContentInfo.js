import React from 'react'

function ContentInfo() {
    return (
        <div className="info-container">
            <div className="info-content"><i class="fas fa-envelope"></i>hello@yay.com</div>
            <div className="info-content"><i class="fas fa-phone"></i>123 456 7890</div>
            <div className="info-content"><i class="fas fa-map-marker-alt"></i>
                <div className="listing">
                    <li>123 Some Street</li>
                    <li>Somewhere</li>
                    <li>Some City</li>
                    <li>10000</li>
                </div>
            </div>
        </div>
    )
}

export default ContentInfo
