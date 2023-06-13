import { CreateProfile, EmployerHero, hireCandidate, shareJob, JobSeekerService } from "../assets"

export const EmployerPageData = {
    heroSection: {
        lookingFor: 'Looking for candidates ?',
        heading: 'Find Right Fit Using AI',
        cta_label: 'Talk to sales',
        cta_link: '',
        hero_img: EmployerHero,
        hero_alt: ''
    },
    ctaSection: {
        title: 'Post Job',
        description: 'Gethire makes job posting and finding right candidate seamless with AI solution',
        steps: [
            {
                number: 'Step 1',
                step_img: CreateProfile,
                step_alt: 'Gethire: Create profile to find right fit',
                step_cta: 'Create Profile',
                step_cta_link: ''
            },
            {
                number: 'Step 2',
                step_img: shareJob,
                step_alt: 'Gethire: share job post',
                step_cta: 'Share Job Post',
                step_cta_link: ''
            },
            {
                number: 'Step 3',
                step_img: hireCandidate,
                step_alt: 'Gethire: meet right candidate',
                step_cta: 'Hire Candidate',
                step_cta_link: ''
            }
        ],
        main_cta: {
            label: 'Create Profile Now',
            link: ''
        }
    },
    interestSection: {
        leftSide: {
            heading: 'Candidates That Suits Your Requirement',
            description: 'We have pull of candidates and also ability to create the pull as per your requirement. Let us know whom are you hiring:',
            buttons: [
                'Full Time', 'Part Time ', 'Freelancer'
            ]
        },
        rightSide: {
            headline: 'Let Us Know To Whom Are You Hiring:',
            buttons: [
                'Tech', 'Non Tech', 'Sales', 'HR', 'Travel', 'Influencer Marketing', 'Finance', 'Food', 'Music', 'Gig Work', 'Freelance', 'Arts and Craft', 'Marketing', 'Photography'
            ]
        }
    },
    redirectSection: {
        main_img: JobSeekerService,
        main_img_alt: '',
        headline: 'Save More Than 60% Time on Hiring Efforts With Gethire Services',
        buttons: [
            'Consulting', 'Hiring', 'Marketing', 'Community'
        ]

    },
    pricingSection: [
        {
            title: 'Free',
            description: 'It will be free, till you feel valued.',
            amount: '0',
            duration: 'NA',
            features: [
                'Profile Creation', 'Recommendation', 'Job Search', 'Job Application',
                'Community Access', 'HR Communication', 'Financial Assistance'
            ]
        },
        {
            title: 'Freshers',
            description: 'Your trust matters a lot for us. We are there whenever you need.',
            amount: '1000',
            duration: 'Monthly',
            features: [
                'Profile Creation', 'Recommendation', 'Job Search', 'Job Application',
                'Community Access', 'HR Communication', 'Financial Assistance', 'Verified Profile', 'Pemium Tagging', 'KAM', 'CV Creation Assistance', 'Cover Letter Assistance', 'Personalised Recommendation'
            ]
        },
        {
            title: 'Professional',
            description: 'Your long term commitment gives us strength to fight against all odds and make things work for you.',
            amount: '10000',
            duration: 'NA',
            features: [
                'Profile Creation', 'Recommendation', 'Job Search', 'Job Application',
                'Community Access', 'HR Communication', 'Financial Assistance', 'Verified Profile', 'Pemium Tagging', 'KAM', 'CV Creation Assistance', 'Cover Letter Assistance', 'Personalised Recommendation', 'Career Consulting'
            ]
        }
    ]
} 