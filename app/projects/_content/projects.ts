import { techs } from "@/utils/techs";

export enum projectTypes {
  App = "App Development",
  Web = "Web Development",
  Computational = "Computational",
  Service = "Service Development",
  Hardware = "Hardware Programming",
  Electonics = "Electronics & Engineering",
}

export type projectTypeKeys = keyof typeof projectTypes;

const projects = [
  {
    heading: "Car Match Service in Restbed",
    bulletPoints: [
      "Used NextJS & Tailwind CSS to create and design the front-end of a car matching service.",
      "REST API & back end built in C++ with Restbed library",
      "MySQL used to create and manage a complex relational database model. MySQL Connector/C++ library used to dynamically retrieve and create data.",
    ],
    techs: [techs.CPP, techs.MySQL, techs.NextJS, techs.TailwindCSS],
    extras: [],
    type: [projectTypes.Service, projectTypes.Web],
  },
  {
    heading: "AI Sudoku Solver Competition",
    bulletPoints: [
      "Created a sudoku solver using AI in Python. Scored 98% on overall performance for achieving remarkable run-time speeds, topping the leaderboard.",
      "Used backtracking with constraint propagation to solve the Sudoku. Solved most Sudokus that were 90%+ empty under 10ms.",
      "Used human solving techniques in the constraints, making my algorithm over 1000 times more efficient.",
    ],
    techs: [techs.Python],
    extras: ["AI"],
    type: [projectTypes.Computational],
  },
  {
    heading: "Parallel Processing & Multithreading Competition",
    bulletPoints: [
      "Excelled in a competition for optimizing parallel programs (C) on supercomputers through Azure's virtual machines. Implemented P-threads, OpenMP and CUDA to achieve a ~50% software efficiency boost.",
    ],
    techs: [techs.C, techs.Azure],
    extras: ["Virtual Machines", "Super Computers"],
    type: [projectTypes.Computational],
  },
  {
    heading: "Student Study Scheduler",
    bulletPoints: [
      "Designed an appealing UI in C# .NET to be used by 30+ students as an internal app for a study centre.",
      "Integrated a SQL database with relevant commands to enforce privileges and manage the user's data.",
      "Conducted market research using questionnaires and surveys to assess the target audience's needs.",
      "Effectively documented and accommodated my stakeholder's requirements.",
    ],
    techs: [techs.CS, techs.SQL, techs.DotNet],
    extras: ["Relational Database"],
    type: [projectTypes.App],
  },
  {
    heading: "Encryption Using Spectral Analysis",
    bulletPoints: [
      "Incorporated asymmetric encryption by converting strings into time-varying signals, applied signal and image processing techniques with the JDSP and OpenCV library to convert data into an image object.",
    ],
    techs: [techs.Java],
    extras: ["Encryption", "Signal Processing"],
    type: [projectTypes.Computational],
  },
  {
    heading: "Projectile Interception Camera",
    bulletPoints: [
      "Used the OpenCV and NumPy modules to extract and process webcam data to isolate the projectile.",
      "Applied mechanics and mathematical algorithms to predict the flight path.",
      "Experimented with servomechanisms on an Arduino for implementations of a possible dart-turret.",
    ],
    techs: [techs.Python, techs.Arduino],
    extras: ["Image Processing", "Visual Computing", "Robotics", "Hardware"],
    type: [
      projectTypes.Computational,
      projectTypes.Electonics,
      projectTypes.Hardware,
    ],
  },
  {
    heading: "Microprocessor Digital Lock and Stopwatch - PICKIT 3",
    bulletPoints: [
      "Decomposed the functionality into modular assignments to enforce an agile environment.",
      "Interpreted datasheets, wired a keypad, speaker and LCD display correctly, and mapped inputs/outputs.",
      "Diagnosed technical issues using oscilloscopes and debug tools.",
      "Worked remotely with my peer to create efficient comprehensive code and to test/debug.",
    ],
    techs: [techs.C, techs.PICKIT3],
    extras: [
      "Assembly",
      "Electronics",
      "Robotics",
      "Microprocessors",
      "Oscilloscope",
      "Hardware",
    ],
    type: [
      projectTypes.Hardware,
      projectTypes.Electonics,
      projectTypes.Computational,
    ],
  },
  {
    heading: "Network Infrastructure for Training 4 U Services",
    bulletPoints: [
      "Evaluated the client's requirements and implemented a star topology with two professionals.",
      "Created over 30 CAT6 cables, installed data outlet ports and the trunking that lead to the central hub.",
      "Assessed the completeness of my team's work with server tests and conducted continuity tests.",
    ],
    techs: [],
    extras: ["Electronics", "Networks", "Network Topologies"],
    type: [projectTypes.Electonics],
  },
  {
    heading: "CPU Design with VGA Output on an ALU",
    bulletPoints: [
      "Used combinatorial logic and flip flops to program an array of logic gates to behave like a CPU.",
      "Tested output signals using ModelSim to evaluate how successful the operations were.",
      "Created VGA signals to create an image from the ALU.",
    ],
    techs: [
      techs.FPGA,
      techs.QuartusPrime,
      techs.SystemVerilog,
      techs.ModelSim,
    ],
    extras: [],
    type: [projectTypes.Hardware, projectTypes.Computational],
  },
  {
    heading: "Video Compression and Picture Processing in MATLAB",
    bulletPoints: [
      "Manipulated videos with vectors to create a motion field.",
      "Recreated the original video using the motion field and a reduced number of frames.",
      "Green screened pictures and worked with techniques such as Gaussian blur using vectors.",
    ],
    techs: [techs.MATLAB, techs.Python],
    extras: ["Image Processing", "Visual Computing"],
    type: [projectTypes.Computational],
  },
  {
    heading: "PCB Design, CAD & Electrical Experience",
    bulletPoints: [
      "Created filter circuits, combinatorial logic circuits and fabricated PCBs.",
      "Designed an energy harvesting circuit & PCB to efficiently power LEDs using piezoelectricity.",
      "Produced various high-power PCBs that had efficient thermal designs and were resilient to noise/crosstalk.",
    ],
    techs: [techs.OrCAD, techs.Allegro],
    extras: ["PCB", "Manufacturing"],
    type: [projectTypes.Electonics],
  },
  {
    heading: "Analogue Circuit Simulator Algorithm - SPICE",
    bulletPoints: [
      "Created a design document and thoroughly described/implemented the various testing strategies.",
      "Successfully computed circuit values with varying combinations of resistors/capacitor/inductors with different frequencies.",
      "Interpreted and validated the user input file to transform component descriptions into objects.",
    ],
    techs: [techs.Python],
    extras: ["SPICE", "Circuits"],
    type: [projectTypes.Electonics],
  },
];

export default projects;
