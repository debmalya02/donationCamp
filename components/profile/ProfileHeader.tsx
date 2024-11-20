import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ProfileHeader() {
  return (
    <Card>
      <div className="flex flex-col md:flex-row items-center gap-6 p-4">
        <div className="relative w-32 h-32">
          <Image
            src="/profile-placeholder.jpg"
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">John Doe</h1>
          <p className="text-gray-600 mb-4">Member since January 2023</p>
          {/* <Button variant="secondary">Edit Profile</Button> */}
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-gray-600 mb-1">Email</p>
          <p className="font-medium mb-4">john.doe@example.com</p>
          <p className="text-sm text-gray-600 mb-1">Phone</p>
          <p className="font-medium">+91 98765 43210</p>
        </div>
      </div>
    </Card>
  );
}