import brandCard from '../style/brandCard.module.css'

function ColorsBlock({ nameColor, hexV }) {
    return (
        <div className={brandCard.colorBlockWrapper}>
            <div className={brandCard.titleColor}>{nameColor}</div>
            <div className={brandCard.color} style={{ backgroundColor: hexV }}></div>
        </div>
    )
}

export default ColorsBlock