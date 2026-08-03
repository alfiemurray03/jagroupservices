import TeamMemberProfilePage from '@/components/TeamMemberProfilePage';
import { getTeamMember } from '@/data/team-members';

const jack = getTeamMember('jack-nicolau-sousa-da-silva');

export default function JackNicolauSousaDaSilvaPage() {
  return <TeamMemberProfilePage member={jack} />;
}
