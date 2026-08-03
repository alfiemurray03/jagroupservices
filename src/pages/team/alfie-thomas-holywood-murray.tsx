import TeamMemberProfilePage from '@/components/TeamMemberProfilePage';
import { getTeamMember } from '@/data/team-members';

const alfie = getTeamMember('alfie-thomas-holywood-murray');

export default function AlfieThomasHolywoodMurrayPage() {
  return <TeamMemberProfilePage member={alfie} />;
}
