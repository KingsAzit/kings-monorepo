import classes from './Banner.module.css';
import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import calendar_noun from '../../assets/calendar_noun.png';
import jeremy_king from '../../assets/jeremy_king.png';
import kings_3 from '../../assets/3kings.png'
import Noun from '../Noun';
import { Trans } from '@lingui/macro';

const Banner = () => {
  return (
    <Section fullWidth={false} className={classes.bannerSection}>
      <Col lg={6}>
        <div className={classes.wrapper}>
          <h1>
            <Trans>Treasury</Trans>
            <br />
            <Trans>Governed By</Trans>
            <br />
            <Trans>Kings.</Trans>
          </h1>
        </div>
      </Col>
      <Col lg={6}>
        <div style={{ padding: '2rem' }}>
          <Noun imgPath={kings_3} alt="noun" />
        </div>
      </Col>
    </Section>
  );
};

export default Banner;
