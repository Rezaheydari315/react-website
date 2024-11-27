import './Home.css'
import '../../font.css'
import { HeaderProj } from '../HeaderProj/HeaderProj.tsx'


import { Software } from '../Software/Software.tsx'
import { About } from '../About/About.tsx'
import { MoreAbout } from '../MoreAbout/MoreAbout.tsx'


function Home() {
    return (
        <>
            <div>

                <HeaderProj />
                <Software />
                <About />
                <MoreAbout />


            </div>
        </>
    )
}
export { Home }