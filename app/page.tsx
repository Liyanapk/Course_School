import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Banner from "@/components/banner/Banner";
import ContentSection from "@/components/content/Content";
import InstructorPage from "@/components/instructor/Instructor";

export default function CoursePage (){


    return(


        <div>
            <Header/>
            <Banner/>
            <ContentSection/>
            <InstructorPage/>
            <Footer/>
           
        </div>
    )
}