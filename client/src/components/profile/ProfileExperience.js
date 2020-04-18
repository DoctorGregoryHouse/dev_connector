import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
    experience: {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }
}) => (
    <div className="profile-exp bg-white p-2">
        <h2 className="text-primary">{title}</h2>
        <div>
            <h3 className="text-dark">{company}</h3>
            <p>
                <Moment format="YYYY/MM/DD">{from}</Moment>{' '}
                {current ? <span>current </span> : <span>- {to}</span>}
            </p>
            <p>
                <strong>Position: </strong>
                {title}
            </p>
            {description && (
                <p>
                    <strong>Description: </strong>
                    {description}
                </p>
            )}
        </div>
    </div>
);

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired
};

export default ProfileExperience;
