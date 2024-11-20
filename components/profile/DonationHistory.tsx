import Card from '@/components/ui/Card';

const donations = [
  {
    id: 1,
    date: '2023-10-15',
    type: 'Money',
    amount: 5000,
    cause: 'Food Distribution Drive',
    status: 'Completed',
  },
  {
    id: 2,
    date: '2023-09-28',
    type: 'Items',
    amount: 2000,
    cause: 'Education Kit Distribution',
    status: 'Completed',
  },
  {
    id: 3,
    date: '2023-09-10',
    type: 'Money',
    amount: 1000,
    cause: 'Medical Camp',
    status: 'Completed',
  },
];

export default function DonationHistory() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-6">Donation History</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Type</th>
              <th className="text-left py-3 px-4">Amount</th>
              <th className="text-left py-3 px-4">Cause</th>
              <th className="text-left py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="py-3 px-4">{donation.date}</td>
                <td className="py-3 px-4">{donation.type}</td>
                <td className="py-3 px-4">₹{donation.amount}</td>
                <td className="py-3 px-4">{donation.cause}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {donation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}