export async function generateMetadata() {
  return {
    title: 'FEVR Dashboard - VR Casino Gaming',
  };
}

export default function Dashboard() {
  return (
    <div className="py-5 [&_p]:my-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to FEVR Dashboard</h1>
      <p>Your VR casino gaming dashboard is coming soon!</p>
    </div>
  );
}
