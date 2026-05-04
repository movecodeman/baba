import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Share2, 
  MapPin, 
  Target, 
  Phone, 
  MessageCircle, 
  Lightbulb, 
  Briefcase, 
  GraduationCap, 
  Brain, 
  Mail, 
  Home, 
  User, 
  Award,
  Calendar,
  CheckCircle2
} from "lucide-react";

const AVATAR_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuDEMOPjpQ84SNEWhbFgcC3-yw42bI1dCgYRKDm3Oa4Aq5Q-f38ra9EKOKyjWWGvCDY9gbfOO9GXWdvh4fbxL5e8y1G27eGZI0w4RF0d0eFC-7CMzODvrHW_N9dMN87KbVYFFuJmRqxFN0l9AVzEGj8LmJEtTFTrQW1dM4se0PETrHcVWj0ym7cSMauNd58ozPBk1f5PzG71AV9FDbzWy0Z0yokA0JdZX4pUSUEcBtUxtAvl9uEe63e3V9vE7x-jBj4m5UE1l3uG5GBr";
const HERO_AVATAR_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuDGlDyUYK2xO4B0uk-YyoeRpREhC2X2QwmDiu1iBJvQOmzcPNiejgUxubYfcZku95kJIbfGP-cJ2-Bdw52ekXJ_YOLc9D7mKJsJzYmTI0Vc7x74dUTQHp34NC2sRqmR0YqRMmUrB6YpXSvpSMegzh35qRqneh24elU66AnEG1Ap9OXSUKUnIXFXasXc1qZb5n_bFKMF0fHtdRJG43Uxpy7ee4-JEjQLC_A1Y8PJAHdYZ-hz7E1RdgaB03wlEGETwrB152aHIu-BWz-d";

type TabType = 'home' | 'work' | 'skills' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  // Ensure scroll to top when changing "pages"
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <motion.div 
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* Hero Section */}
            <section className="gradient-bg rounded-3xl p-6 flex flex-col items-center text-center relative overflow-hidden glass-card">
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>
              <div className="relative z-10 flex flex-col items-center">
                <motion.img 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  src={HERO_AVATAR_URL} 
                  alt="Yan Ping" 
                  className="w-24 h-24 rounded-full border-4 border-accent shadow-lg mb-4 object-cover" 
                />
                <h1 className="text-3xl font-bold text-brand-primary mb-1">闫平</h1>
                <p className="text-slate-600 mb-4 font-medium">全模块 HR · 北京</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold flex items-center gap-1">
                    <MapPin size={12} /> 北京
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold flex items-center gap-1">
                    <Target size={12} /> 全模块HR / HRBP / 招聘
                  </span>
                </div>

                <div className="flex flex-col gap-2 text-sm text-slate-500 font-medium">
                  <div className="flex items-center gap-2 justify-center">
                    <Phone size={14} className="text-accent" />
                    <span>15584273679</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <MessageCircle size={14} className="text-accent" />
                    <span>WeChat: 15584273679</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Highlights */}
            <section className="grid grid-cols-3 gap-3">
              {[
                { val: "5年", label: "HR全盘经验" },
                { val: "5人", label: "月均入职" },
                { val: "20+", label: "服务头部企业" }
              ].map((item, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                  <span className="font-display text-2xl text-brand-primary font-bold mb-1 leading-none">{item.val}</span>
                  <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </section>

            {/* Key Strengths */}
            <section className="glass-card rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <Lightbulb size={20} />
                </div>
                <h2 className="text-xl font-bold text-brand-primary">核心优势</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "5年互联网+出海HR经验",
                  "服务字节/网易/贝壳等头部企业",
                  "擅长从业务视角解决招聘与留存"
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 font-medium">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>
        );

      case 'work':
        return (
          <motion.div 
            key="work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                <Briefcase size={20} />
              </div>
              <h2 className="text-xl font-bold text-brand-primary">工作经历</h2>
            </div>
            <div className="relative pl-6 space-y-8 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-slate-100 before:border-dashed before:border-l-2">
              {[
                { 
                  company: "青子未来", 
                  date: "2023.05 - 2025.12", 
                  role: "全盘HR", 
                  desc: "从0到1构建公司招聘体系与人力资源管理架构。主导技术、产品、运营等核心部门的关键人才猎寻。建立并落地OKR绩效管理体系，将人效比提升25%。",
                  active: true 
                },
                { 
                  company: "字节跳动", 
                  date: "2021.08 - 2023.04", 
                  role: "招聘专家 (TikTok E-commerce)", 
                  desc: "负责TikTok出海电商业务线的技术及高端管理人才招聘。成功引入多位具备国际化视野的P9+资深技术领军人，支持业务部从起步阶段迅速扩展至成熟规模，招聘达成率始终保持在110%以上。",
                  active: false 
                },
                { 
                  company: "纬创软件", 
                  date: "2018.06 - 2021.07", 
                  role: "高级招聘顾问", 
                  desc: "驻点或深度服务网易、字节等战略客户，月均入职人数峰值达8人。擅长复杂JD深度拆解及立体化人才搜索，累计为客户通过试用期的核心研发人员超150人。",
                  active: false 
                }
              ].map((job, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[30px] top-1.5 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10 ${job.active ? 'bg-accent' : 'bg-slate-200'}`} />
                  <div className="glass-card rounded-2xl p-5 hover:bg-white/90 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900">{job.company}</h3>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold bg-slate-50 px-2 py-0.5 rounded">
                        <Calendar size={10} /> {job.date}
                      </div>
                    </div>
                    <p className="text-sm text-accent font-semibold mb-3">{job.role}</p>
                    <p className="text-sm text-slate-500 leading-relaxed font-normal">{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'skills':
        return (
          <motion.div 
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                <Award size={20} />
              </div>
              <h2 className="text-xl font-bold text-brand-primary">教育经历</h2>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">长春财经学院</h3>
                  <p className="text-sm text-slate-500 font-medium">人力资源管理 · 本科 (2016-2020)</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <Brain size={20} />
                </div>
                <h2 className="text-xl font-bold text-brand-primary">技能标签</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "全链路招聘", "HRBP经验", "目标/绩效管理", "团队从0到1搭建", 
                  "离调转管", "出海互联网", "技术岗深度寻言", "简历评估与面试"
                ].map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-white text-accent border border-accent/20 rounded-xl text-sm font-bold shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div 
            key="contact"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-8"
          >
            <section className="glass-card rounded-3xl p-8 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Mail size={40} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-primary mb-2">诚邀沟通</h2>
                <p className="text-slate-500 font-medium max-w-[240px]">如果您对我的经历感兴趣，欢迎通过以下方式联系我</p>
              </div>
              
              <div className="w-full space-y-3">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                  <span className="text-slate-600 font-bold">手机号码</span>
                  <span className="text-accent font-bold">15584273679</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <span className="text-slate-600 font-bold">微信账号</span>
                  <span className="text-accent font-bold">15584273679</span>
                </div>
              </div>

              <button 
                className="w-full py-4 rounded-2xl bg-accent text-white font-bold text-lg shadow-[0_12px_24px_rgba(192,132,151,0.3)] active:scale-95 transition-transform"
                onClick={() => window.open('tel:15584273679')}
              >
                直接致电
              </button>
            </section>
            <p className="text-slate-400 text-xs font-bold text-center italic">感谢关注，期待您的回馈</p>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen pb-32 overflow-x-hidden">
      {/* Top AppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_4px_12px_rgba(45,49,66,0.04)] border-b border-white/20 flex justify-between items-center h-16 px-5 max-w-2xl mx-auto left-0 right-0">
        <div className="flex items-center gap-3">
          <img 
            src={AVATAR_URL} 
            alt="Yan Ping" 
            className="w-8 h-8 rounded-full border border-accent/30 object-cover" 
          />
          <span className="text-lg font-bold tracking-tight text-slate-900 font-sans">Yan Ping</span>
        </div>
        <button className="active:scale-95 transition-transform p-2 bg-accent/5 rounded-full text-accent" onClick={() => setActiveTab('contact')}>
          <Share2 size={20} />
        </button>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-5 max-w-2xl mx-auto relative min-h-[calc(100vh-128px)]">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      {/* Bottom Nav Bar */}
      <nav className="fixed bottom-0 w-full z-50 rounded-t-[32px] bg-white/95 backdrop-blur-2xl border-t border-white/30 shadow-[0_-8px_32px_rgba(45,49,66,0.08)] px-6 py-4 left-0 right-0 max-w-2xl mx-auto">
        <div className="flex justify-around items-center">
          {[
            { id: 'home' as TabType, icon: <Home size={22} />, label: "主页" },
            { id: 'work' as TabType, icon: <Briefcase size={22} />, label: "工作" },
            { id: 'skills' as TabType, icon: <Award size={22} />, label: "资历" },
            { id: 'contact' as TabType, icon: <User size={22} />, label: "联系" }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center justify-center transition-all duration-300 relative group"
            >
              <div className={`p-2 rounded-2xl transition-all duration-300 ${
                activeTab === item.id 
                ? 'bg-accent/10 text-accent translate-y-[-4px]' 
                : 'text-slate-400 group-hover:text-slate-600'
              }`}>
                {item.icon}
              </div>
              <span className={`text-[10px] font-bold mt-1 uppercase tracking-wider transition-all duration-300 ${
                activeTab === item.id 
                ? 'text-accent opacity-100' 
                : 'text-slate-400 opacity-60'
              }`}>
                {item.label}
              </span>
              {activeTab === item.id && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
