import { React } from "react";
import "../assets/css/index.css";

const About = () => {
  return (
    <div className="bg-slate-300 rounded-md p-2 text-lg">
      {/* add text styling */}
      <p>
        I'm a former Utility Surveyor, growing into a new
        career in Web development, starting with an Intensive 6 month program
        from the University of Birmingham. Over the last 7 years I've been
        directing a small team on large infrastructure projects such as HS2,
        Lower Thames Crossing & Transpennine Route upgrade.
      </p>
      <br></br>
      <p>
        Through my career I have developed project management skills applicable
        in various environements. I pride myself on being self motivated and
        being able to problem solve in the feild with minimal disruption. I have
        a strong focus on the quality of work produced, im aware that my work
        carries my name and feel I should be proud of all of it, regardless of
        the project taking a few hours or several months.
      </p>
      <br></br>
      <p>
        My studies in Web developmet have centered around a 6 month Full stack
        program from the University of Birmingham, This course focused on a MERN
        Stack but expanded to other technologies to provide alternatives and
        foundational learning as well as topics such as Computer science, Test
        driven development & PWAs.
      </p>
      <br></br>
      <p>
        Upon completion of the program i have continued to work toward expanding
        my portfolio and have started Volunteering with the CodeYourFuture
        charity to help others into the industry.
      </p>
    </div>
  );
};

export default About;
