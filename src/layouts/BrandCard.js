import React from 'react'
import brandCard from '../style/brandCard.module.css'
import useRating from '../hooks/useRating'
import useColor from '../hooks/useColor'
import ratingCSS from '../style/rating.module.css'

function BrandCard({ name, img, price, description, brand, rating, type, prodLink, webLink, nameColor, getColors }) {

    const [styleRating, ratingProcent] = useRating(rating)
    const [colorResult] = useColor(getColors)
    return (
        <div className={brandCard.wrapper}>
            <div className={brandCard.wrap}>
                <div className={brandCard.changeImage}>
                    <div className={brandCard.image}>
                        <img className={brandCard.img} src={img} alt={type} />
                    </div>
                </div>
                <div className={brandCard.leftSide}>
                    <div className={brandCard.brand}>
                        <a className={brandCard.brandLink} href={webLink}>{brand}</a>
                    </div>
                    <h1 className={brandCard.title}>
                        <a className={brandCard.titleLink} href={prodLink}>{name}</a>
                    </h1>
                    <div className={brandCard.wraptprtg}>
                        <div className={brandCard.type}>{type}</div>
                        <div className={ratingCSS.rating} >
                            <div className={ratingCSS.ratingOuter} style={{ width: ratingProcent }}></div>
                            <div className={ratingCSS.ratingInner} style={{ width: ratingProcent }}></div>
                        </div>
                        <div><p>{rating}</p></div>
                        <div className={brandCard.noReview} style={styleRating}>
                            <p className={brandCard.noReviewText}>the product has no reviews</p>
                        </div>
                    </div>
                    <hr style={{ width: '100%' }} />
                    <p className={brandCard.price}>{price} $ </p>
                    <div className={brandCard.wrapcolors}>{colorResult}</div>
                </div>
            </div>
            <div className={brandCard.wrapDescr}>
                <h3 className={brandCard.descrTitle}>Description</h3>
                <div className={brandCard.line}></div>
                <hr style={{ width: '100%', margin: 0 }} />
                <p className={brandCard.descr}>{description}</p>
            </div>

        </div>
    )
}

export default BrandCard