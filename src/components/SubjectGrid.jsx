import SubjectCard from "./SubjectCard";
import channelsData from "../data/channels";

const SubjectsGrid = ({ onSubjectClick }) => {
  const subjects = Object.keys(channelsData).map((subject) => ({
    name: subject,
  }));

  return (
    <div className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">Browse Subjects</h2>
          <p className="text-slate-500 text-xs mt-0.5">
            Select a topic to view curated educational creators.
          </p>
        </div>

        <span className="text-[11px] font-semibold text-indigo-400 bg-indigo-950/40 px-2.5 py-1 rounded-md border border-indigo-900/30">
          {subjects.length} Categories
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.name}
            {...subject}
            onClick={onSubjectClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectsGrid;
