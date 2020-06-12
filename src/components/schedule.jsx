/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Headline, TableBody } from './parts';
import styles from './schedule.module.scss';

import { scheduleTitle } from '../mock-data';

export const Schedule = ({ bodyData }) => (
	<section className={styles.schedule}>
		<div className={styles.schedule__inner}>
			<Headline title={scheduleTitle} priority={3} className={styles.schedule__headline} />
			<table className={styles.schedule__table}>
				<tbody>
					<TableBody bodyData={ bodyData } />
				</tbody>
			</table>
		</div>
	</section>
);

Schedule.propTypes = {
	bodyData: PropTypes.arrayOf(
		PropTypes.arrayOf(PropTypes.string).isRequired
	).isRequired
};
