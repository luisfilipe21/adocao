import { useEffect } from "react"

export const useSlowScroll = () => {
    useEffect(() => {
        const links = document.querySelectorAll("a[href^='#']");
        links.forEach((a) => {
            a.addEventListener("click", (e) => {
                e.preventDefault();

                const element = e.target;
                const id = element.getAttribute("href");

                const section = document.querySelector(id);
                const distanceFromTop = section.offsetTop;
                window.scroll({
                    top: distanceFromTop,
                    behavior: 'smooth'
                })
            })
        })
    }, [])

}