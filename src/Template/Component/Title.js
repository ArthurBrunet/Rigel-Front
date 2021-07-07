import "../../Style/PageTitle.css";

export default function Title(title) {
    return (
        <div className={'pageTitle'}>
            <h2>{title.title}</h2>
        </div>
    )
}
