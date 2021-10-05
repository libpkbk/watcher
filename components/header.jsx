import { Spiral as Hamburger } from 'hamburger-react'

const Header = () => {
    return (
        <section>
            <div className="flex justify-between w-screen px-6 bg-yellow-200">
                <div id="logo" className="">
                    <img src="/images/logo.svg" />
                </div>

                <div className="flex flex-col justify-between h-8">
                    <div className="w-6 h-2 bg-red-200"></div>
                    <div className="w-6 h-2 bg-black"></div>
                </div>
                <div>HJello</div>
                <div>Galti se ho gaya</div>
                <div>Galti se ho gaya</div>
                <div>World</div>

            </div>
        </section>
    );
}

export default Header;