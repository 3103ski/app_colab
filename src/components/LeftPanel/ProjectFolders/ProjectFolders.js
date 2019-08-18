import React, { Component } from 'react';

import classes from './ProjectFolders.module.css';

class ProjectFolders extends Component {
	state = {};
	render() {
		return (
			<div className={classes.FoldersNav}>
				<div className={classes.ListTitles}>
					<h4 className={classes.LeftTitle}>Name</h4>
					<h4 className={classes.RightTitle}>Status</h4>
				</div>
				<div className={classes.FolderList}>
					{/*  */}
					<div className={classes.FolderListItem}>
						<div className={classes.FolderLeft}>
							<img
								alt="folder"
								src={require('../../../assets/closefolder.png')}
							/>
							<div className={classes.ItemDetails}>
								<p>Jimmy Cones - Do It Again</p>
								<div className={classes.StatusDots}>
									<div
										className={classes.Dot}
										style={{ backgroundColor: '#57FF3B' }}
									/>
									<div
										className={classes.Dot}
										style={{ backgroundColor: '#57FF3B' }}
									/>
									<div
										className={classes.Dot}
										style={{ backgroundColor: '#FFC83B' }}
									/>
									<div className={classes.Dot} />
									<div
										className={classes.Dot}
										style={{ backgroundColor: '#57FF3B' }}
									/>
									<div className={classes.Dot} />
								</div>
							</div>
						</div>
						<div className={classes.FolderRight}>
							<img
								alt="check"
								src={require('../../../assets/lightcheck.png')}
							/>
							<p className={classes.ItemStatus}>0/5</p>
						</div>
					</div>
					{/*  */}
					<div className={classes.FolderListItem}>
						<div className={classes.FolderLeft}>
							<img
								alt="folder"
								src={require('../../../assets/closefolder.png')}
							/>
							<div className={classes.ItemDetails}>
								<p>The Bears - Eating All Day</p>
								<div className={classes.StatusDots}>
									<div
										className={classes.Dot}
										style={{ backgroundColor: '#57FF3B' }}
									/>
									<div className={classes.Dot} />
									<div
										className={classes.Dot}
										style={{ backgroundColor: '#57FF3B' }}
									/>
									<div
										className={classes.Dot}
										style={{ backgroundColor: '#D0D0D0' }}
									/>
								</div>
							</div>
						</div>
						<div className={classes.FolderRight}>
							<img
								alt="check"
								src={require('../../../assets/lightcheck.png')}
							/>
							<p className={classes.ItemStatus}>2/6</p>
						</div>
					</div>
					{/*  */}
					<div className={classes.FolderListItem}>
						<div className={classes.FolderLeft}>
							<img
								alt="folder"
								src={require('../../../assets/openfolder.png')}
							/>
							<div className={classes.ItemDetails}>
								<p>Dan Jones - About Time</p>
								<div className={classes.StatusDots}>
									<div className={classes.Dot} />
									<div
										className={classes.Dot}
										style={{ backgroundColor: '#FFC83B' }}
									/>
									<div
										className={classes.Dot}
										style={{ backgroundColor: '#FFC83B' }}
									/>
								</div>
							</div>
						</div>
						<div className={classes.FolderRight}>
							<img
								alt="check"
								src={require('../../../assets/lightcheck.png')}
							/>
							<p className={classes.ItemStatus}>0/2</p>
						</div>
					</div>
					{/*  */}
					<div className={classes.FolderListItem}>
						<div className={classes.FolderLeft}>
							<img
								alt="folder"
								src={require('../../../assets/closefolder.png')}
							/>
							<div className={classes.ItemDetails}>
								<p>Kalib Billigan - Ride</p>
								<div className={classes.StatusDots}>
									<div
										className={classes.Dot}
										style={{ backgroundColor: '#FFC83B' }}
									/>
									<div
										className={classes.Dot}
										style={{ backgroundColor: '#FFC83B' }}
									/>
									<div className={classes.Dot} />
									<div className={classes.Dot} />
								</div>
							</div>
						</div>
						<div className={classes.FolderRight}>
							<img
								alt="check"
								src={require('../../../assets/lightcheck.png')}
							/>
							<p className={classes.ItemStatus}>4/7</p>
						</div>
					</div>
					{/*  */}
				</div>
			</div>
		);
	}
}

export default ProjectFolders;
