import Profile from "./Profile";

function App() {
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      role: "Software Engineer",
      avatarUrl: "https://qa.oa.edu.ua/image/avatarpict/4901f122-a5cf-447c-a854-767d41ad24a8"
    },
    {
      id: 2,
      name: "Ervin Howell",
      role: "UI/UX Designer",
      avatarUrl: "https://static.rada.gov.ua/dep_img9/es1.jpg"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      role: "QA Specialist",
      avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Megan_Fox_Transformers_Sydney_Premiere_%28square%29.jpg"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      role: "Product Manager",
      avatarUrl: "https://www.wwe.com/f/styles/talent_champion_lg/public/all/2024/03/The_Rock_PROFILE--927b15797eefad54a3bca4d2a15e4921.png"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      role: "Data Analyst",
      avatarUrl: "https://www.famousbirthdays.com/faces/rider-diana-image.jpg"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      role: "DevOps Engineer",
      avatarUrl: "https://ntvb.tmsimg.com/assets/assets/249358_v9_bb.jpg?w=360&h=480"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      role: "Team Lead",
      avatarUrl: "https://upload.wikimedia.org/wikipedia/ru/8/82/Dexter.jpg"
    }
  ];





  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="profiles">
        {users.map(user => (
          <Profile
            key={user.id}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}
export default App;