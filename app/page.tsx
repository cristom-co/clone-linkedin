import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'

import CollaborativeArticles from '@/app/components/CollaborativeArticles'

import JobSearch from '@/app/components/JobSearch'

import PostJob from '@/app/components/PostJob'

import SoftwareTools from '@/app/components/SoftwareTools'

import Games from '@/app/components/Games'

import OpenToWork from '@/app/components/OpenToWork'

// import ConnectAndLearn from './components/ConnectAndLearn'
// import WhoIsLinkedIn from './components/WhoIsLinkedIn'
// import JoinCTA from './components/JoinCTA'


import Footer from '@/app/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CollaborativeArticles />
        <JobSearch />
        <PostJob />
        <SoftwareTools />
        <Games />
        <OpenToWork />
        {/* <ConnectAndLearn /> */}
        {/* <WhoIsLinkedIn /> */}
        {/* <JoinCTA /> */}
      </main>
      <Footer />
    </div>
  )
}
