interface GreetingProps {
  role?: string;
}

const Greeting: React.FC<GreetingProps> = ({ role }) => {
  const formattedRole = role
    ? role.charAt(0).toUpperCase() + role.slice(1)
    : "User";

  return (
    <div className="flex justify-center items-center h-full text-2xl font-semibold text-slate-800">
      Welcome to {formattedRole} Dashboard
    </div>
  );
};

export default Greeting;


// const Greeting = ({role}) => {
//   return (
//     <div className="flex justify-center items-center h-full text-2xl font-semibold text-slate-800">
//      {` Welcome to ${role} Dashboard`}
//     </div>
//   );
// };

// export default Greeting;
