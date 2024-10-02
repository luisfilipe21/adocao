export const Header = () => {

    return (
        <header className="md:max-w-[1280px] max-w-[520px] ">
            <div className="p-8 m-auto w-full flex items-center">
                <figure>
                    <img src="src/assets/react.svg" />
                </figure>
                <nav className="w-full flex justify-between md:justify-evenly ">
                    <a href="">
                        Sobre
                    </a>
                    <a href="">
                        Pets para adoção
                    </a>
                    <a href="">
                        Apoie nossa causa
                    </a>
                </nav>
            </div>
        </header>
    )
}