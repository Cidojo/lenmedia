/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const TableBody = ({ bodyData }) => (
	<>
		{bodyData.map((row, rowIdx) => (
			<Fragment key={rowIdx}>
				<tr>
					{row.map((cell, cellIdx) => (
						<td key={cellIdx}>{cell}</td>
					))}
				</tr>
			</Fragment>
		))}
	</>
);

TableBody.propTypes = {
	bodyData: PropTypes.arrayOf(
		PropTypes.arrayOf(PropTypes.string).isRequired
	).isRequired
};
