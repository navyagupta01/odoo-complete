
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SwapCard from './SwapCard';
import { Clock, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const SwapPage = () => {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  
  const users = [
    {
      id: '1',
      name: 'Sarah Chen',
      avatar: '/placeholder.svg',
      location: 'San Francisco, CA',
      tagline: 'Creative designer who loves coding challenges',
      offeredSkills: [
        { name: 'Graphic Design', level: 'expert' as const },
        { name: 'Figma', level: 'expert' as const }
      ],
      wantedSkills: ['React', 'JavaScript'],
      rating: 4.8,
      matchPercentage: 92
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      avatar: '/placeholder.svg',
      location: 'Austin, TX',
      tagline: 'Full-stack developer passionate about clean code',
      offeredSkills: [
        { name: 'Python', level: 'expert' as const },
        { name: 'Django', level: 'intermediate' as const }
      ],
      wantedSkills: ['UI/UX Design', 'Photography'],
      rating: 4.9,
      matchPercentage: 87
    },
    {
      id: '3',
      name: 'Emma Wilson',
      avatar: '/placeholder.svg',
      location: 'New York, NY',
      tagline: 'Marketing expert with a love for data analytics',
      offeredSkills: [
        { name: 'Digital Marketing', level: 'expert' as const },
        { name: 'Content Writing', level: 'intermediate' as const }
      ],
      wantedSkills: ['Data Analysis', 'SQL'],
      rating: 4.7,
      matchPercentage: 78
    }
  ];

  const ongoingSwaps = [
    {
      id: '1',
      partner: 'John Doe',
      avatar: '/placeholder.svg',
      yourSkill: 'React Development',
      theirSkill: 'UI/UX Design',
      deadline: '2024-01-15',
      status: 'in-progress'
    },
    {
      id: '2',
      partner: 'Lisa Kim',
      avatar: '/placeholder.svg',
      yourSkill: 'Photography',
      theirSkill: 'Content Writing',
      deadline: '2024-01-20',
      status: 'waiting-review'
    }
  ];

  const pendingSwaps = [
    {
      id: '3',
      partner: 'Mike Johnson',
      avatar: '/placeholder.svg',
      yourSkill: 'JavaScript',
      theirSkill: 'Python',
      sentAt: '2024-01-10',
      status: 'pending'
    }
  ];

  const swapHistory = [
    {
      id: '4',
      partner: 'Anna Lee',
      avatar: '/placeholder.svg',
      yourSkill: 'Node.js',
      theirSkill: 'Graphic Design',
      completedAt: '2023-12-28',
      status: 'completed',
      rating: 5
    },
    {
      id: '5',
      partner: 'David Brown',
      avatar: '/placeholder.svg',
      yourSkill: 'React',
      theirSkill: 'Vue.js',
      completedAt: '2023-12-15',
      status: 'cancelled',
      rating: null
    }
  ];

  const handleSwipeLeft = () => {
    if (currentUserIndex < users.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    console.log('Sending swap request to:', users[currentUserIndex].name);
    if (currentUserIndex < users.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
    }
  };

  const handleSuperSwipe = () => {
    console.log('Super swiping on:', users[currentUserIndex].name);
    if (currentUserIndex < users.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'waiting-review':
        return <Clock className="w-4 h-4 text-amber-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-gray-500" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'waiting-review':
        return 'bg-amber-100 text-amber-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Skill Swap</h1>
        <p className="text-gray-600">Find your perfect skill exchange partner</p>
      </div>

      <Tabs defaultValue="discover" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="discover">Discover</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="discover" className="space-y-6">
          <div className="flex justify-center">
            {currentUserIndex < users.length ? (
              <SwapCard
                user={users[currentUserIndex]}
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
                onSuperSwipe={handleSuperSwipe}
              />
            ) : (
              <Card className="w-full max-w-sm mx-auto">
                <CardContent className="p-8 text-center">
                  <RotateCcw className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No more profiles</h3>
                  <p className="text-gray-600 text-sm">Check back later for new skill swappers!</p>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="bg-gradient-to-r from-[#875A7B] to-[#F06EAA] rounded-2xl p-4 text-white text-center">
            <h3 className="font-semibold mb-1">💡 Skill Matcher Tip</h3>
            <p className="text-sm opacity-90">
              You have high compatibility with designers looking for React skills!
            </p>
          </div>
        </TabsContent>

        <TabsContent value="ongoing" className="space-y-4">
          {ongoingSwaps.map((swap) => (
            <Card key={swap.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      {swap.partner.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{swap.partner}</h3>
                      <p className="text-sm text-gray-600">
                        {swap.yourSkill} ↔ {swap.theirSkill}
                      </p>
                      <p className="text-xs text-gray-500">Deadline: {swap.deadline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(swap.status)}
                    <Badge className={getStatusColor(swap.status)}>
                      {swap.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {pendingSwaps.map((swap) => (
            <Card key={swap.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      {swap.partner.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{swap.partner}</h3>
                      <p className="text-sm text-gray-600">
                        {swap.yourSkill} ↔ {swap.theirSkill}
                      </p>
                      <p className="text-xs text-gray-500">Sent: {swap.sentAt}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(swap.status)}
                    <Badge className={getStatusColor(swap.status)}>
                      {swap.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          {swapHistory.map((swap) => (
            <Card key={swap.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      {swap.partner.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{swap.partner}</h3>
                      <p className="text-sm text-gray-600">
                        {swap.yourSkill} ↔ {swap.theirSkill}
                      </p>
                      <p className="text-xs text-gray-500">Completed: {swap.completedAt}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(swap.status)}
                    <Badge className={getStatusColor(swap.status)}>
                      {swap.status}
                    </Badge>
                    {swap.rating && (
                      <div className="flex items-center gap-1 text-yellow-500">
                        <span className="text-sm">⭐ {swap.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SwapPage;
