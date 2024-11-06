export interface HeaderProps {
    handleChangeSection: (id: string) => void
    section: string
    menu: Array<{
        title: string
        id: string
    }>
}
