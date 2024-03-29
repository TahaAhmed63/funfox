import React from "react";
import cloudOne from "/assests/week-1/cloud-1.png";
import cloudTwo from "/assests/week-1/cloud-2.png";
import cloudThree from "/assests/week-1/cloud-3.png";
import cloudFour from "/assests/week-1/cloud-4.png";
import cloudFive from "/assests/week-1/cloud-5.png";
import ImageWithOverlay from "../components/ImageWithOverlay";
import student from "/assests/week-1/student.png";
import bgOne from "/assests/week-1/bg-1.png";
import { MdOutlineRecordVoiceOver } from "react-icons/md";

const WeekOne = () => {
  return (
     <div className="container mx-auto px-4 md:px-0"> 
       <div className="flex p-0 flex-col items-center text-xl md:text-2xl md:p-24 md:pb-0 ">
         <h1 className="p-2 w-full max-w-[500px] text-center text-xl md:text-3xl rounded-full shadow-md border-dashed border-[3.31px] border-[#FFAEBE] bg-[#FE6784] text-white">Elements of Story Writing</h1>
         <p className="mt-10 md:mt-3 text-sm md:text-2xl">
           Welcome to term 2 of Writers Club. Are you excited for this amazing
           journey? Over the next week, we will be practicing the different
           elements of story writing. Our aim is to make stories more interesting
           and exciting.
         </p>
         <div className="min-h-[114px] p-3 flex mt-3 bg-[#25A3A1] w-[100%] relative text-white shadow-md border-dashed border-[3.31px] border-[#A4FDFB]">
           <p className="pr-20 text-xs  md:text-2xl" >
             There are elements which make the foundation for story writing. An
             element is an essential part of something and every fiction story has
             the same key elements:
           </p>
           <img src={student} alt="student" className="absolute right-4"/>
         </div>
         
         <div className="flex h-[58px] md:h-[191px] content-start  md:flex-row gap-2 md:gap-6">
           <div  className="text-xs 	h-16">
             <ImageWithOverlay className="text-xs	"   imageUrl={cloudOne} overlayText="Character" />
           </div>
           <div  className="text-xs 	h-16"  >
             <ImageWithOverlay className="text-xs	"   imageUrl={cloudTwo} overlayText="Setting" />
           </div>
           <div  className="text-xs 	h-16">
             <ImageWithOverlay className="text-xs	"   imageUrl={cloudThree} overlayText="Plot" />
           </div>
           <div  className="text-xs 	h-16">
             <ImageWithOverlay className="text-xs	"   imageUrl={cloudFour} overlayText="Conflict" />
            </div>
           <div  className="text-xs 	h-16">
             <ImageWithOverlay className="text-xs	" imageUrl={cloudFive} overlayText="Theme" />
           </div>
         </div>
         <p className="pb-5 text-xs  md:text-2xl">
           There are elements which make the foundation for story writing. An
           element is an essential part of something and every fiction story has
           the same key elements:
         </p>
         <div className="relative ">
 <img src={bgOne} alt="Background" className="w-full min-h-64 md:min-h-56" />
 <div className="absolute inset-6 flex flex-col items-start">
    <p className="px-10 text-xs  md:text-2xl">
      For today’s lesson, we will try to understand and practice writing the setting for our stories.
    </p>
    <p className="px-10 pt-6 pb-5 md:pb-0 text-xs  md:text-2xl">
      The setting is an important element of every fiction story.
    </p>
 </div>
 
</div>

 
       </div>
       <div className="flex justify-between content-center">
<div className="voice-btn rounded-full p-2 bg-fuchsia-600	mb-10 ml-8	text-white	mt-10 ">
<MdOutlineRecordVoiceOver />

</div>
<div className="voice-btn rounded-full p-2 bg-fuchsia-600	mb-10 ml-8	text-white	mt-10 ">
<MdOutlineRecordVoiceOver />

</div>
 </div>
     </div>
  );
 };
 

export default WeekOne;
