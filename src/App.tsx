import React from 'react';
import { Shield, Code, Globe, Mail, Linkedin, Github, ExternalLink, Calendar, MapPin, Award, ChevronDown, Terminal, Database, Lock, Network, Cloud, Users, Phone, Trophy, Star, Zap, BookOpen, Target, Briefcase } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="font-bold text-xl">Aimane Elwatiq</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('accueil')} className="hover:text-cyan-400 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('apropos')} className="hover:text-cyan-400 transition-colors">À propos</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-cyan-400 transition-colors">Formation</button>
              <button onClick={() => scrollToSection('projets')} className="hover:text-cyan-400 transition-colors">Projets</button>
              <button onClick={() => scrollToSection('competences')} className="hover:text-cyan-400 transition-colors">Compétences</button>
              <button onClick={() => scrollToSection('activites')} className="hover:text-cyan-400 transition-colors">Activités</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Aimane Elwatiq
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                  Étudiant en Cybersécurité & Cloud Computing
                </p>
                
                <p className="text-lg text-cyan-400 mb-6">
                  Institut National des Postes et Télécommunications (INPT)
                </p>
                
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Users className="h-5 w-5 text-orange-400" />
                    <span className="text-orange-300 font-medium">Secrétaire Générale du Bureau des Étudiantes - INPT</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-lg p-4 mb-8">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Briefcase className="h-5 w-5 text-blue-400" />
                    <span className="text-blue-300 font-medium">Participant GITEX avec le projet VerdAI - Orange Digital Center</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Passionné par la cybersécurité et les technologies cloud, je développe des solutions innovantes 
                  pour la protection des systèmes et m'engage activement dans la vie associative étudiante et l'innovation technologique.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => scrollToSection('projets')}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    Découvrir mes projets
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="border border-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-full font-semibold transition-all"
                  >
                    Me contacter
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Achievement Badges */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative flex items-center justify-center">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="h-24 w-24 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Cybersécurité & Innovation
                    </h3>
                  </div>
                </div>
                
                {/* Achievement badges */}
                <div className="absolute -top-2 -left-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  🏆 Hackathon Winner
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  🚀 GITEX Africa Participant
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('apropos')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="h-8 w-8 text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Étudiant en première année à l'INPT, je me spécialise en cybersécurité et technologies cloud. 
                Mon parcours combine excellence académique, innovation technologique et engagement associatif fort.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Lauréat du Hackathon Basma 2024 avec l'application HmyTek anti-cyberviolence, j'ai également 
                participé au GITEX avec le projet VerdAI en collaboration avec Orange Digital Center. 
                Mon rôle de Secrétaire Générale du Bureau des Étudiantes me permet de concilier leadership et service à la communauté.
              </p>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Trophy className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-green-300">Hackathon Basma 2024</h3>
                </div>
                <p className="text-gray-300">
                  🥇 <strong>1ère place</strong> avec l'application HmyTek pour lutter contre la cyberviolence
                  <br />
                  <span className="text-sm text-gray-400">Organisé par Enabel, DGSN et Orange</span>
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-300">GITEX Global</h3>
                </div>
                <p className="text-gray-300">
                  🚀 <strong>Participation</strong> avec le projet VerdAI
                  <br />
                  <span className="text-sm text-gray-400">En collaboration avec Orange Digital Center</span>
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cybersécurité</h3>
                <p className="text-sm text-gray-400">Protection & Analyse</p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                <Cloud className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cloud Computing</h3>
                <p className="text-sm text-gray-400">Infrastructure moderne</p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                <Code className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Développement</h3>
                <p className="text-sm text-gray-400">Solutions innovantes</p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Leadership</h3>
                <p className="text-sm text-gray-400">Engagement associatif</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Parcours Académique
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Cycle d'Ingénieur en Cybersécurité</h3>
                  <p className="text-cyan-400 font-medium mb-2">Institut National des Postes et Télécommunications (INPT)</p>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>2024 - 2027</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>Rabat, Maroc</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Formation d'excellence en cybersécurité couvrant la protection des systèmes, 
                    l'analyse des menaces et les technologies cloud.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Classes Préparatoires aux Grandes Écoles</h3>
                  <p className="text-blue-400 font-medium mb-2">Filière MP - Mathématiques et Physique</p>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>2022 - 2024</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Formation intensive en mathématiques et physique préparant aux concours 
                    d'entrée des grandes écoles d'ingénieurs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Baccalauréat Scientifique</h3>
                  <p className="text-green-400 font-medium mb-2">Sciences Mathématiques</p>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>2022</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span className="text-green-400 font-medium">Mention : Très Bien</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Diplôme obtenu avec excellence, spécialisation en sciences mathématiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* HmyTek Project - Featured */}
            <div className="md:col-span-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8 hover:bg-green-500/20 transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Trophy className="h-10 w-10 text-green-400" />
                  <div>
                    <h3 className="text-2xl font-semibold">Application HmyTek</h3>
                    <p className="text-green-300 font-medium">🏆 Gagnante Hackathon Basma 2024</p>
                  </div>
                </div>
                <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  Primé
                </div>
              </div>
              <h4 className="font-medium text-green-300 mb-3">Solution Anti-Cyberviolence</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Application innovante développée pour lutter contre la cyberviolence, intégrant des fonctionnalités 
                de détection automatique, de signalement et de support aux victimes. Projet lauréat du concours 
                organisé par Enabel, DGSN et Orange.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded text-sm">IA/ML</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded text-sm">React</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded text-sm">Python</span>
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded text-sm">NLP</span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
                  <span>Voir détails</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
                <span className="text-gray-400 text-sm">Hackathon Basma 2024 - 1ère place</span>
              </div>
            </div>

            {/* VerdAI Project - GITEX */}
            <div className="md:col-span-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8 hover:bg-blue-500/20 transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Globe className="h-10 w-10 text-blue-400" />
                  <div>
                    <h3 className="text-2xl font-semibold">Projet VerdAI</h3>
                    <p className="text-blue-300 font-medium">🚀 Présenté au GITEX Africa</p>
                  </div>
                </div>
                <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  Innovation
                </div>
              </div>
              <h4 className="font-medium text-blue-300 mb-3">Solution IA pour l'Environnement</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Projet innovant développé en collaboration avec Orange Digital Center et présenté au GITEX Africa. 
                VerdAI utilise l'intelligence artificielle pour proposer des solutions environnementales durables.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded text-sm">Intelligence Artificielle</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded text-sm">Environnement</span>
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded text-sm">Orange Digital Center</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded text-sm">GITEX Africa</span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <span>Voir détails</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
                <span className="text-gray-400 text-sm">GITEX Africa - Orange Digital Center</span>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-700/50 transition-all group">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-semibold">Plateforme Collaborative Sécurisée</h3>
              </div>
              <h4 className="font-medium text-blue-300 mb-3">Partage de Fichiers Sécurisé</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Application web sécurisée pour le partage de fichiers en environnement éducatif avec 
                contrôle d'accès granulaire et chiffrement des données.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs">Flask</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs">SQLite</span>
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Bcrypt</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-400">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                <span className="text-sm">En développement</span>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-700/50 transition-all group">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="h-8 w-8 text-cyan-400" />
                <h3 className="text-xl font-semibold">Projet IoT Intelligent</h3>
              </div>
              <h4 className="font-medium text-cyan-300 mb-3">Consommation d'Énergie Optimisée</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Système IoT pour surveiller et optimiser la consommation énergétique d'une maison connectée 
                utilisant ThingSpeak et protocoles de communication modernes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">ThingSpeak</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">ESP8266/ESP32</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">MQTT</span>
              </div>
              <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                <span className="text-sm">Voir détails</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-700/50 transition-all group">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="h-8 w-8 text-purple-400" />
                <h3 className="text-xl font-semibold">Détection de Ransomwares</h3>
              </div>
              <h4 className="font-medium text-purple-300 mb-3">Augmentation de Dataset par IA</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Solution d'augmentation de données utilisant des algorithmes génératifs (CTGAN, TVAE) 
                pour améliorer la détection de ransomwares.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded text-xs">CTGAN</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">TensorFlow</span>
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Keras</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-400">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                <span className="text-sm">En développement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Network className="h-8 w-8 text-cyan-400" />
                <h3 className="text-xl font-semibold">Réseaux & Sécurité</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">TCP/IP</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">VPN</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Wireshark</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Nmap</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Terminal className="h-8 w-8 text-green-400" />
                <h3 className="text-xl font-semibold">Systèmes</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Linux</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Ubuntu</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Debian</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Bash</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="h-8 w-8 text-purple-400" />
                <h3 className="text-xl font-semibold">Programmation</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Python</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Java</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">C</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">POO</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="h-8 w-8 text-orange-400" />
                <h3 className="text-xl font-semibold">Web & UI/UX</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">HTML/CSS</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">JavaScript</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Figma</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Justinmind</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activites" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Activités & Engagements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6 hover:bg-orange-500/20 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-orange-400" />
                <h3 className="text-xl font-semibold">Leadership Étudiant</h3>
              </div>
              <h4 className="font-medium text-orange-300 mb-3">Secrétaire Générale du Bureau des Étudiantes</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Coordination des activités étudiantes, représentation de la communauté estudiantine et 
                organisation d'événements académiques et sociaux à l'INPT.
              </p>
              <div className="flex items-center space-x-2 text-orange-400">
                <Star className="h-4 w-4" />
                <span className="text-sm font-medium">Poste actuel</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 hover:bg-green-500/20 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="h-8 w-8 text-green-400" />
                <h3 className="text-xl font-semibold">Compétitions</h3>
              </div>
              <h4 className="font-medium text-green-300 mb-3">Hackathons & CTF</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Participation active aux hackathons et compétitions CTF cybersécurité. 
                Lauréat du Hackathon Basma 2024 avec l'application HmyTek.
              </p>
              <div className="flex items-center space-x-2 text-green-400">
                <Award className="h-4 w-4" />
                <span className="text-sm font-medium">1ère place Hackathon Basma 2024</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 hover:bg-blue-500/20 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Terminal className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-semibold">Club IT (CIT)</h3>
              </div>
              <h4 className="font-medium text-blue-300 mb-3">Membre Actif - Cybersécurité</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Participation aux activités du Club IT, organisation d'ateliers cybersécurité et 
                participation aux compétitions CTF inter-écoles.
              </p>
              <div className="flex items-center space-x-2 text-blue-400">
                <Target className="h-4 w-4" />
                <span className="text-sm font-medium">CTF & Workshops</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6 hover:bg-indigo-500/20 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="h-8 w-8 text-indigo-400" />
                <h3 className="text-xl font-semibold">Innovation & Technologie</h3>
              </div>
              <h4 className="font-medium text-indigo-300 mb-3">GITEX Africa & Orange Digital Center</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Participation au GITEX Africa avec le projet VerdAI en collaboration avec Orange Digital Center. 
                Engagement dans l'innovation technologique et l'entrepreneuriat.
              </p>
              <div className="flex items-center space-x-2 text-indigo-400">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-medium">Innovation technologique</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 hover:bg-purple-500/20 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-purple-400" />
                <h3 className="text-xl font-semibold">Club des Affaires Sociales</h3>
              </div>
              <h4 className="font-medium text-purple-300 mb-3">Membre - Actions Humanitaires</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Organisation d'événements humanitaires et d'actions sociales au profit de la communauté. 
                Engagement pour l'impact social positif.
              </p>
              <div className="flex items-center space-x-2 text-purple-400">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-medium">Impact social</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contactez-moi
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Intéressé par une collaboration, un projet ou souhaitez discuter de cybersécurité ? 
            N'hésitez pas à me contacter !
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="mailto:elwatiqaymane@gmail.com" 
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all group block"
            >
              <Mail className="h-12 w-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">elwatiqaymane@gmail.com</p>
            </a>
            
            <a 
              href="tel:+212642018773" 
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all group block"
            >
              <Phone className="h-12 w-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-400 text-sm">+212 6 42 01 87 73</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/aimane-elwatiq-b53202321/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all group block"
            >
              <Linkedin className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connectons-nous</p>
            </a>
            
            <a 
              href="https://github.com/aimane-elwatiq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all group block"
            >
              <Github className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">Voir mes projets</p>
            </a>
          </div>

          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Disponible pour</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-cyan-400" />
                <span>Projets cybersécurité</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-4 w-4 text-blue-400" />
                <span>Développement d'applications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-purple-400" />
                <span>Collaborations étudiantes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-cyan-400" />
            <span className="font-semibold">Aimane Elwatiq</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 - Étudiant en Cybersécurité à l'INPT | Secrétaire Générale du Bureau des Étudiantes
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Passionné par la cybersécurité, le cloud computing et l'innovation technologique
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;