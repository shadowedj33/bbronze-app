import { Link } from "react-router-dom";
import { brennaphoto } from "../assets";

export default function About() {
    return (
        <div className="flex flex-col items-center">
            <h1 className='text-5xl font-bold font-dscript text-center mt-4 mb-2 text-lbrown'>About The Owner</h1>
            <div className="flex flex-col md:flex-row items-center py-4">
                <img src={brennaphoto} alt="brennaphoto" height={520} width={350} className="rounded-xl ml-12 mr-4" />  
                <p className="p-4 text-xl font-asap text-mbrown text-center mx-4">Hi, I&apos;m Brenna! I&apos;ve had a passion for beauty & all things alike for as long as I can remember. What I love most is being able to help anyone feel and look their best, whatever that may mean for them. I decided to pursue a career in Esthetics so that I could do just that. While I was training to be an Esthetician, I had the idea to start a mobile spray tanning business. In school, the art of spray tanning was undoubtedly my favorite out of the skills we learned. It felt familiar almost immediately and I quickly grew confidence in my abilities. But what really sparked the idea for the business was my past as a competitive Irish dancer.  </p>                
            </div>
            <div className="flex flex-col md:flex-row items-center py-2">
                <p className="p-4 text-xl font-asap text-mbrown text-center mx-4">
                If you&apos;re not familiar, it&apos;s very common to tan before competitions because it makes all the difference on stage with the lights. For smaller competitions I would use a self tan mousse, and for larger ones such as Regionals, Nationals, or Worlds, it was always a spray tan. Even outside of dance, I&apos;ve always loved the option of a natural bronze glow without the UV damage. With that being said, I have very sensitive skin and typically spray tans & even self tan mousse would cause me to break out in itchy hives on my neck, hips, in between elbows, etc. At the time, I was uneducated and thought it was a “me problem”, which proved to be completely untrue. 
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center py-2">
                <p className="p-4 text-xl font-asap text-mbrown text-center mx-4">
                What I didn&apos;t know was that most big brands have unnatural, harsh additives that are especially harsh on those with more sensitive skin. After first learning the skill, I was still very hesitant to get one. But witnessing the girls in my class have no reaction paired with the most gorgeous natural glow, I knew it was worth a try. As a professional, I&apos;m so grateful to have found a brand like <Link className="font-bold underline" to={'/products'}>SJOLIE</Link> that is everything I&apos;d look for, and continues to exceed expectations.
                </p>
            </div>
            {/* <Link className="font-bold underline" to={'/products'}>SJOLIE</Link> */}
        </div>
    );
}