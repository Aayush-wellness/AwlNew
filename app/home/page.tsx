import HeroSection from "@/components/HeroSection";
import PreventiveHealth from "@/components/PreventiveHealth";
import StructureBeats from "@/components/StructureBeats";
import Ecosystem from "@/components/Ecosystem";
import BusinessModel from "@/components/BusinessModel";
import OurVision from "@/components/OurVision";
import Conversation from "@/components/Conversation";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <HeroSection />
            <div className="container mx-auto min-h-screen flex flex-col bg-white">
                <PreventiveHealth />
                <StructureBeats />
                <Ecosystem />
                <BusinessModel />
                <OurVision />
                <Conversation />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

