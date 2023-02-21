import React from 'react';
import Button from '@material-ui/core/Button';
// import { useTranslation } from 'react-i18next';
import { SYSTEM_CONSTANTS } from '../../common/constants';
import { useHistory } from 'react-router-dom';

const NotFound: React.VFC = () => {
  // const { t } = useTranslation();
  const history = useHistory();

  const backToHomeClick = () => {
    history.replace('/');
  };

  return (
    <div className="no-data no-data-found items-center">
      <div
        className="img"
        style={{
          backgroundImage: `url(${
            SYSTEM_CONSTANTS.BASE_URL + '/assests/no-data/page-not-found.svg'
          })`,
        }}
      ></div>
      <h3 className="title text-14">
        {/* {t("Oops the page you were looking for doesn't exist")} */}
        Oops the page you were looking for doesnt exist
      </h3>
      <p className="title-2 mb-14">
        {/* {t('You may have mistyped the address or the page may have moved')} */}
        You may have mistyped the address or the page may have moved
      </p>
      <Button
        variant="contained"
        className="btn btn-pc-1"
        onClick={backToHomeClick}
      >
        {/* {t('Take me back to Home')} */}
        Take me back to Home
      </Button>
    </div>
  );
};

export default NotFound;
