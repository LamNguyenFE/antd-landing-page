import React from 'react'
import AppAbout from '../components/home/AppAbout'
import AppContact from '../components/home/AppContact'
import AppFaq from '../components/home/AppFaq'
import AppFeature from '../components/home/AppFeature'
import AppHero from '../components/home/AppHero'
import AppPricing from '../components/home/AppPricing'
import AppWork from '../components/home/AppWork'

function AppHome() {
    return (
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWork />
            <AppFaq />
            <AppPricing />
            <AppContact />
        </div>
    )
}

export default AppHome
