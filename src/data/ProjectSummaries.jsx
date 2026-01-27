import nextdoorPhoto from "../assets/images/nextdoor.png";
import seerPhoto from "../assets/images/seer.png"
import playlistPhoto from "../assets/images/playlistorganizer.png"
import mfmsPhoto from "../assets/images/mfms.png"
import mllrPhoto from "../assets/images/mllr.png"
import mmbcPhoto from "../assets/images/MMBC.png"
import spinSyncPhoto from "../assets/images/spinsync.png"
import emsPhoto from "../assets/images/ems.png"

export const projectSummaries = [
  {
    id: 1,
    title: "Nextdoor",
    photo: nextdoorPhoto,
    summary: 'As a software engineering intern, I designed and shipped a cross-platform Profile Completion feature to increase user engagement and sense of community, collaborating closely with design, iOS, and Android to iterate toward a carousel-based experience with task CTAs and a completion meter. The feature drove a 3% increase in 3-day active retention and a 218% increase in completed profiles.',
    link: "/nextdoor",
  },
  {
    id: 2,
    title: "SEER",
    photo: seerPhoto,
    summary: 'SEER (Sequencing Experiment Error Rate) is a patent-pending tool that accurately computes error rates for long-read DNA sequencing by generating confusion matrices from Nanopore FastQ reads and Sanger “ground truth” sequences. I designed the mathematical framework and core algorithm, implementing a modular software architecture to calculate true positive, error, and sequence-to-sequence miscalculation rates. The project aims to advance pharmacogenomic research by providing a much-needed, precise measure of base-calling accuracy.',
    link: "/seer",
  },
  {
    id: 3,
    title: "SpinSync",
    photo: spinSyncPhoto,
    summary: 'Spin Sync is a web application that streamlines the process of designing indoor cycling classes by generating data-driven ride structures from music. Drawing on my experience as a cycle instructor, I built a full-stack app with a React/TypeScript frontend and integrated Spotify authentication to personalize playlists and class plans. The project applies machine learning to map song characteristics to ride drills, reducing class prep time while maintaining an engaging, instructor-quality experience.',
    link: "/spinsync",
  },
  {
    id: 4,
    title: "Playlist Organizer",
    photo: playlistPhoto,
    summary: 'Playlist Organizer automatically curates playlists with a smooth, intentional flow of energy and mood, inspired by the manual process of crafting road-trip playlists. The project transforms song metadata into a structured energy model and uses it to sequence tracks in a way that feels dynamic yet cohesive. The result is an automated system that balances variety, pacing, and musical diversity to create a more engaging listening experience.',
    link: "/playlistorganizer",
  },
  {
    id: 5,
    title: "EMS",
    photo: emsPhoto,
    summary: 'Developed a prototype Pharmaceutical Representative Helper during my internship at EMS Pharmaceuticals to assist sales reps in efficiently engaging with medical professionals. Built entirely in Excel, the tool used data-driven algorithms to generate personalized messaging strategies based on doctor prescribing patterns and EMS investment. Tested with top sales reps, the prototype was validated as highly useful for guiding interactions and increasing prescription engagement.',
    link: "/ems",
  },
  {
    id: 6,
    title: "MLLR",
    photo: mllrPhoto,
    summary: 'Machine Learning for Lyric Recognition(MLLR) is aproject that uses natural language processing to predict a song’s artist based solely on its lyrics. The model applies a bag-of-words representation with a probabilistic classification approach to capture stylistic patterns across multiple top-streamed artists. This project highlights how text-based machine learning techniques can analyze creative expression and uncover similarities and differences in lyrical style.',
    link: "/mllr",
  },
  // {
  //   id: 7,
  //   title: "MFMS",
  //   photo: mfmsPhoto,
  //   summary: 'I serve as Director of Web & Mobile Development for the Michigan Fashion Media Summit, leading the design and development of the summit’s website and mobile app. I build accessible, user-focused interfaces using modern web and mobile technologies to support event information and ticketing. Through iterative design, A/B testing, and usability evaluations, I helped optimize the digital experience before and during summit day.',
  //   link: "/mfms",
  // },
  // {
  //   id: 8,
  //   title: "MMBC",
  //   photo: mmbcPhoto,
  //   summary: 'I serve as Chief Technical Officer for the Michigan Music Business Club, leading the development of a conference app that provided real-time access to event information for attendees. I also built and maintained the club’s website, ensuring a clear and reliable digital presence for applicants, sponsors, and donors.',
  //   link: "/mmbc",
  // },
];
