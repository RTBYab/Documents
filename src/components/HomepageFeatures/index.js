import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
    {
        title: <Translate>مهندسی شده برای اتصال سریع و راحت</Translate>,
        Svg: require('@site/static/img/api.svg').default,
        description: <Translate>با استفاده از وب‌سرویس‌های یکپارچه و اسناد فنی به‌روز</Translate>,
    },
    {
        title: <Translate>(DRM) رمزنگاری امن و اختصاصی</Translate>,
        Svg: require('@site/static/img/privacy.svg').default,
        description: <Translate>رمزنگاری دو مرحله ای و پیشرفته با جدیدترین متد روز دنیا</Translate>,
    },
    {
        title: <Translate>قیمت رقابتی</Translate>,
        Svg: require('@site/static/img/risk.svg').default,
        description: <Translate>پرداخت بر اساس حجم و بدون نیاز به تهیه لاینسس برای هر کاربر</Translate>,
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
