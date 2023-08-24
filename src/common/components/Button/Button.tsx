import s from './Button.module.scss'
export function Button(props: { text: string }) {
    return (
        <a href={''} className={s.themeBtn}>{props.text}</a>
    )
}
