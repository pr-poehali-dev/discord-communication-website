import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('chats');
  const [selectedChat, setSelectedChat] = useState('general');

  const sidebarItems = [
    { id: 'friends', label: 'Друзья', icon: 'Users' },
    { id: 'chats', label: 'Чаты', icon: 'MessageCircle' },
    { id: 'servers', label: 'Серверы', icon: 'Server' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
  ];

  const servers = [
    { id: 'gaming', name: 'Gaming Squad', icon: '🎮', members: 124 },
    { id: 'dev', name: 'Dev Community', icon: '💻', members: 89 },
    { id: 'music', name: 'Music Lovers', icon: '🎵', members: 156 },
  ];

  const channels = [
    { id: 'general', name: 'общий', type: 'text' },
    { id: 'random', name: 'флуд', type: 'text' },
    { id: 'voice1', name: 'Голосовой чат', type: 'voice' },
    { id: 'announcements', name: 'объявления', type: 'text' },
  ];

  const messages = [
    {
      id: 1,
      user: 'АлексГеймер',
      avatar: '/placeholder.svg',
      role: 'Админ',
      roleColor: 'bg-red-500',
      message: 'Всем привет! Сегодня играем в новую игру?',
      time: '14:23',
      online: true
    },
    {
      id: 2,
      user: 'ПроИгрок2024',
      avatar: '/placeholder.svg',
      role: 'Модератор',
      roleColor: 'bg-blue-500',
      message: 'Да! Уже собираю команду',
      time: '14:25',
      online: true
    },
    {
      id: 3,
      user: 'НовичокИван',
      avatar: '/placeholder.svg',
      role: 'Участник',
      roleColor: 'bg-gray-500',
      message: 'Можно с вами? Только начинаю играть',
      time: '14:26',
      online: false
    },
  ];

  const onlineMembers = [
    { name: 'АлексГеймер', role: 'Админ', roleColor: 'bg-red-500', status: 'online' },
    { name: 'ПроИгрок2024', role: 'Модератор', roleColor: 'bg-blue-500', status: 'online' },
    { name: 'МастерКод', role: 'Разработчик', roleColor: 'bg-purple-500', status: 'away' },
    { name: 'ГеймерПро', role: 'VIP', roleColor: 'bg-yellow-500', status: 'online' },
  ];

  const offlineMembers = [
    { name: 'НовичокИван', role: 'Участник', roleColor: 'bg-gray-500', status: 'offline' },
    { name: 'СтарыйИгрок', role: 'Ветеран', roleColor: 'bg-green-500', status: 'offline' },
  ];

  return (
    <div className="h-screen bg-background flex text-foreground">
      {/* Левая боковая панель - серверы */}
      <div className="w-16 bg-sidebar flex flex-col items-center py-4 space-y-3">
        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-2xl hover:rounded-xl transition-all duration-200 cursor-pointer">
          🎮
        </div>
        <Separator className="w-8" />
        {servers.map((server) => (
          <div
            key={server.id}
            className="w-12 h-12 bg-sidebar-accent rounded-2xl flex items-center justify-center text-xl hover:rounded-xl transition-all duration-200 cursor-pointer hover:bg-primary group relative"
          >
            {server.icon}
            <div className="absolute left-16 bg-card px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {server.name}
            </div>
          </div>
        ))}
        <div className="w-12 h-12 bg-sidebar-accent rounded-2xl flex items-center justify-center hover:rounded-xl transition-all duration-200 cursor-pointer hover:bg-primary">
          <Icon name="Plus" size={20} />
        </div>
      </div>

      {/* Основная боковая панель - навигация и каналы */}
      <div className="w-64 bg-sidebar-background flex flex-col">
        {/* Заголовок сервера */}
        <div className="p-4 border-b border-sidebar-border">
          <h2 className="font-bold text-sidebar-foreground">Gaming Squad</h2>
          <p className="text-sm text-sidebar-foreground/60">124 участника</p>
        </div>

        {/* Навигация */}
        <div className="p-3">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "secondary" : "ghost"}
              className="w-full justify-start mb-1 text-sidebar-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={() => setActiveSection(item.id)}
            >
              <Icon name={item.icon as any} size={16} className="mr-2" />
              {item.label}
            </Button>
          ))}
        </div>

        <Separator className="mx-3" />

        {/* Каналы */}
        <div className="flex-1 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wide">
              Текстовые каналы
            </span>
            <Icon name="Plus" size={12} className="text-sidebar-foreground/60 cursor-pointer hover:text-sidebar-foreground" />
          </div>
          
          {channels.filter(c => c.type === 'text').map((channel) => (
            <div
              key={channel.id}
              className={`flex items-center p-2 rounded cursor-pointer mb-1 ${
                selectedChat === channel.id 
                  ? 'bg-sidebar-accent text-sidebar-foreground' 
                  : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
              onClick={() => setSelectedChat(channel.id)}
            >
              <Icon name="Hash" size={16} className="mr-2" />
              {channel.name}
            </div>
          ))}

          <div className="flex items-center justify-between mb-2 mt-4">
            <span className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wide">
              Голосовые каналы
            </span>
            <Icon name="Plus" size={12} className="text-sidebar-foreground/60 cursor-pointer hover:text-sidebar-foreground" />
          </div>

          {channels.filter(c => c.type === 'voice').map((channel) => (
            <div
              key={channel.id}
              className="flex items-center p-2 rounded cursor-pointer mb-1 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
            >
              <Icon name="Volume2" size={16} className="mr-2" />
              {channel.name}
            </div>
          ))}
        </div>

        {/* Профиль пользователя */}
        <div className="p-3 border-t border-sidebar-border">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>Ю</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Юра</p>
              <p className="text-xs text-sidebar-foreground/60">В сети</p>
            </div>
            <div className="flex space-x-1">
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Icon name="Mic" size={14} />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Icon name="Headphones" size={14} />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Icon name="Settings" size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Основная область чата */}
      <div className="flex-1 flex flex-col">
        {/* Заголовок чата */}
        <div className="h-16 border-b border-border flex items-center px-4">
          <Icon name="Hash" size={20} className="mr-2 text-muted-foreground" />
          <h3 className="font-semibold">{channels.find(c => c.id === selectedChat)?.name}</h3>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Icon name="Phone" size={16} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Video" size={16} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Users" size={16} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Search" size={16} />
            </Button>
          </div>
        </div>

        {/* Сообщения */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex space-x-3 hover:bg-muted/20 p-2 rounded">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>{message.user[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium">{message.user}</span>
                    <Badge className={`${message.roleColor} text-white text-xs px-1 py-0`}>
                      {message.role}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                  <p className="text-sm">{message.message}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Поле ввода сообщения */}
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Icon name="Plus" size={16} />
            </Button>
            <Input 
              placeholder={`Сообщение в #${channels.find(c => c.id === selectedChat)?.name}`}
              className="flex-1"
            />
            <Button variant="ghost" size="sm">
              <Icon name="Smile" size={16} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Gift" size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Правая боковая панель - участники */}
      <div className="w-60 bg-sidebar-background border-l border-sidebar-border">
        <div className="p-4">
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wide mb-2">
              В сети — {onlineMembers.length}
            </h4>
            <div className="space-y-1">
              {onlineMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-2 p-1 rounded hover:bg-sidebar-accent/50 cursor-pointer">
                  <div className="relative">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-sidebar-background ${
                      member.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-sidebar-foreground truncate">{member.name}</p>
                    <Badge className={`${member.roleColor} text-white text-xs px-1 py-0`}>
                      {member.role}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wide mb-2">
              Не в сети — {offlineMembers.length}
            </h4>
            <div className="space-y-1">
              {offlineMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-2 p-1 rounded hover:bg-sidebar-accent/50 cursor-pointer opacity-60">
                  <div className="relative">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gray-500 rounded-full border-2 border-sidebar-background" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-sidebar-foreground truncate">{member.name}</p>
                    <Badge className={`${member.roleColor} text-white text-xs px-1 py-0`}>
                      {member.role}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;