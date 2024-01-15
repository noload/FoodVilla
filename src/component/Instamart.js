import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="border-2 border-red-300 p-5 m-2 text-justify flex flex-col justify-center items-center ">
        <h1 className="text-xl font-semibold p-2 text-center text-blue-800">
          {title}
        </h1>

        {isVisible ? (
          <button
            className="w-1/12  p-1 px-6 margin-2 rounded-lg  bg-blue-700 transition ease-in-out hover:bg-indigo-800 hover:rounded-none  duration-1000"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
        ) : (
          <button
            className="w-1/12 p-1 px-6 margin-2 bg-blue-400 rounded-lg transition ease-in-out  hover:bg-indigo-800  duration-1000 hover:rounded-none"
            onClick={() => setIsVisible(true)}
          >
            Show
          </button>
        )}

        {isVisible && <p>{desc}</p>}
      </div>
    </>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState("big-bazzar");
  return (
    <div>
      <h1 className="text-2xl font-bold p-2 m-2">Instamart</h1>
      <Section
        title={"Instamart Sales"}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={sectionConfig == "sales"}
        setIsVisible={(item) => {
          if (item) {
            setSectionConfig("sales");
          } else {
            setSectionConfig("");
          }
        }}
      />
      <Section
        title={"Instamart Courses"}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={sectionConfig == "course"}
        setIsVisible={(item) => {
          if (item) {
            setSectionConfig("course");
          } else {
            setSectionConfig("");
          }
        }}
      />
      <Section
        title={"Instamart Career"}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={sectionConfig == "career"}
        setIsVisible={(item) => {
          if (item) {
            setSectionConfig("career");
          } else {
            setSectionConfig("");
          }
        }}
      />
      <Section
        title={"Instamart BigBazzar"}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={sectionConfig == "big-bazzar"}
        setIsVisible={(item) => {
          if (item) {
            setSectionConfig("big-bazzar");
          } else {
            setSectionConfig("");
          }
        }}
      />
    </div>
  );
};

export default Instamart;
