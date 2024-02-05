import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="M.sc in COMPUTER SCIENCE"
            subTitle="Dhote Bandhu Science College Gondia (2021 - 2023)"
            result="7.5 CPI"
            des="Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
          />
          <ResumeCard
            title="B.sc in ELECTRONICS & COMPUTER SCENCE"
            subTitle="Dhote Bandhu Science College Gondia (2017 - 2020)"
            result="70.00%"
            des="Studied in this college Subjects like: Mathematics, Computer Science ,Electronics "
          />
          <ResumeCard
            title="Higher & Secondary School Education"
            subTitle="(2005 - 2017)"
            result=" 70.00%"
            des="Studied in this school  from 10th to 12thstd. SSC Subjects: English, Hindi, Marathi, Maths, Science, Social Sciences."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" The Complete 2023 Web Development Bootcamp By Angela Yu"
            subTitle="Udemy - (01/01/2023 - 20/06/2023) [6 months]"
            result="Online"
            des="Learnt MERN stack and made various project using the skills in this course. Check out my Github for project info !"
          />
          <ResumeCard
            title=" Machine Learning in Python"
            subTitle="Acmegrade (Partner Mood Indigo IIT Bombay) - (10/06/2022 - 30/08/2022) [2-3 months]"
            result="Online"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in USA isn't easy."
          />
          <ResumeCard
            title="Neo4j"
            subTitle="GRAPHACADEMY - (Issued on 4th November 2022)"
            result="Online"
            des=" Learned basics of Neo4j - a database management system "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education