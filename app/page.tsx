import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";


const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
        <section className="home-section">
            <CompanionCard
            id='123'
            name='Neura the brainy Explorer'
            topic="Neural Network of the Brain "
            subject="Science"
            duration={45}
            color="#ffda6e"
            />
            <CompanionCard
                id="543"
                name='Countsy the Number Wizard'
                topic="Derivatives & Integrals"
                subject="Math"
                duration={30}
                color="#e5d0ff"
            />
            <CompanionCard
                id="877"
                name='Verba the Vocabulary Builder'
                topic="English Literature"
                subject="Language"
                duration={30}
                color="#BDE7FF"
            />
        </section>

        <section className="home-section">
            <CompanionList
             title="Recently completed sessions"
            companions={recentSessions}
            className="w-2/3 max-lg:w-full"
            />
            <CTA/>
        </section>
    </main>
  )
}

export default Page