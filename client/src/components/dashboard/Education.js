import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Education = ({ education }) => {
    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td> {edu.school} </td>
            <td className="hide-sm"> {edu.degree} </td>
            <td>
                <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
                {edu.to === null ? (
                    'now '
                ) : (
                    <Moment format="YYYY/MM/DD">{edu.to} </Moment>
                )}
            </td>
            <td>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    ));
    return (
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <tr>
                    <th>Company</th>
                    <th className="hide-sm">Title</th>
                    <th className="hide-sm">Years</th>
                    <th />
                </tr>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    );
};

Education.propTypes = {
    education: PropTypes.array.isRequired
};

export default Education;
