/** @format */
import React from 'react'

import Timeline from './timeline'
import TimelineElement from './timeline-element'
import {
	faChartBar,
	faNewspaper,
	faCubes,
	faChalkboardTeacher,
	faPizzaSlice,
	faGamepad,
} from '@fortawesome/free-solid-svg-icons'

const HdwattsTimeline: React.FC<{}> = () => (
	<div>
		<Timeline>
			<TimelineElement
				date='October 2017 - Present'
				skills={[
					'React',
					'Node',
					'Python',
					'Lambda',
					'Rails',
					'Ruby',
					'Machine Learning',
				]}
				icon={faChartBar}
			>
				<h3>Chronograph Private Equity</h3>
				<h4>Founding Team Member + Lead Software Developer</h4>
				<ul>
					<li>
						Innovated and delivered high quality features to attract elite
						private equity institutions. These features helped us stand out from
						the entrenched competition and brought us from $0 to over $19.4
						trillion total AUM coverage
					</li>
					<li>
						Introduced codebase, API, data security, and employee onboarding
						standards for a young company, growing the engineering team from a
						team of one to over 20 people
					</li>
					<li>
						Produced tools to streamline internal processes, such as custom
						automation microservices and machine learning lambda functions. In
						one case decreased co-worker time spent on a task from 2.5 hours per
						document to only 1 minute
					</li>
					<li>
						Sole creator and maintainer of the C# based xConnect Excel Plugin
						which securely handles data ingestion and digestion for clients via
						custom formulas
					</li>
				</ul>
			</TimelineElement>
			<TimelineElement
				date='April 2023 - Present'
				skills={['React', 'ReactNative', 'Expo']}
				icon={faGamepad}
			>
				<h3>WordTree - A Daily Word Puzzle</h3>
				<h4>Solo Creator</h4>
				<ul>
					<li>
						Solo developed and published a game, WordTree, in my free time over
						the first 4 months of 2023
					</li>
					<li>
						Utilized React Native and Expo to build a unified experience across
						the web and phone
					</li>
					<li>
						The game is now freely available on the web, the App Store, and
						Google Play marketplaces
					</li>
				</ul>
			</TimelineElement>
			<TimelineElement
				date='August 2016 - October 2017'
				skills={['ColdFusion', 'C#', '.NET', 'Classic ASP']}
				icon={faCubes}
			>
				<h3>Structured Web</h3>
				<h4>Lead Software Developer</h4>
				<ul>
					<li>
						Delivered features for high profile clients such as Intel and Amazon
						in .NET, C#, and ColdFusion.
					</li>
					<li>
						Led an overhaul of our codebase to prepare for a security audit,
						making over 26,000 individual improvements across 2,134 files over a
						2 month period in order to prevent XSS, CSRF, and SQL Injection
						attacks.
					</li>
					<li>Expanded and led the software development team</li>
				</ul>
			</TimelineElement>
			<TimelineElement date='August 2016' icon={faPizzaSlice}>
				<h4>Moved to New York!</h4>
			</TimelineElement>
			<TimelineElement
				date='June 2015 - April 2016'
				skills={['Perl', 'JQuery', 'SQL']}
				icon={faNewspaper}
			>
				<h3>EJournal Press</h3>
				<h4>Software Development Intern</h4>
				<ul>
					<li>
						Refactored over 75 intricate Perl subsystems to a new, more
						configurable system.
					</li>
					<li>
						Worked directly with clients on an intricate system with over 6,000
						configuration flags.
					</li>
					<li>
						Took part in the full software development life cycle process
						(design, code, test, maintain).
					</li>
				</ul>
			</TimelineElement>
			<TimelineElement
				date='June 2012 - September 2014'
				skills={['ColdFusion', 'JQuery', 'SQL']}
				icon={faChalkboardTeacher}
			>
				<h3>McDonogh School</h3>
				<h4>Assistant Systems Administrator</h4>
				<ul>
					<li>
						Led project teams ranging from 2-5 people in establishing efficient
						software solutions.
					</li>
					<li>
						Moved the entire Application and Admissions process at McDonogh
						School to an online and paperless system I constructed. System
						handles 800-1,000 applicants a year.
					</li>
					<li>
						Developed online billing system for McDonogh School’s Business
						Office. Handles billing and transactions for 1,299 students and 177
						faculty members.
					</li>
					<li>
						Maintained full Administrative control over the Windows Server
						running the website and databases, and trusted with client’s private
						information as well as handling of their online transactions.
					</li>
				</ul>
			</TimelineElement>
		</Timeline>
	</div>
)

export default HdwattsTimeline
