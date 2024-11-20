import Card from '@/components/ui/Card';

const stats = [
  {
    label: 'Total Donations',
    value: '₹8,000',
  },
  {
    label: 'Donations Made',
    value: '3',
  },
  {
    label: 'Causes Supported',
    value: '3',
  },
];

const badges = [
  {
    name: 'First Donation',
    description: 'Made your first donation',
    icon: '🎉',
  },
  {
    name: 'Regular Donor',
    description: 'Donated for 3 consecutive months',
    icon: '⭐',
  },
];

export default function UserStats() {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-semibold mb-6">Your Impact</h2>
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600">{stat.label}</span>
              <span className="font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold mb-6">Badges Earned</h2>
        <div className="space-y-4">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <h3 className="font-medium">{badge.name}</h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}