
// import Banner from "@/components/banner/Banner";
import ContentSection from "@/components/content/Content";
import Catagory from "@/components/catagory/Catagory";
import InstructorPage from "@/components/instructor/Instructor";
import FeedBack from "@/components/feedback/FeedBack"
import SendEmail from "@/components/email/Email"
import BlogPost from "@/components/post/BlogPost";
import Event from "@/components/events/Event";
import dynamic from "next/dynamic";
const Banner = dynamic(()=> import("@/components/banner/Banner"))

export default function HomePage () { 

    return(

        <>
            <Banner/>
            <ContentSection/>
            <Catagory/>
            <InstructorPage/>
            <FeedBack />
            <Event/>
            <BlogPost/>
            <SendEmail/>
        </>
    )
}