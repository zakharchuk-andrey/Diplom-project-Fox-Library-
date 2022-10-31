import { Link } from 'react-router-dom';
import { LinkList,
    FooterWrapper,
    FooterBlock,
    AboutBlock,
    HelpBlock,
    MyAccountBlock,
    ConnectedBlock,
    SocialBlock,
    TitleAboutBlock,
    TitleHelpBlock,
    TitleMyAccountBlock,
    TitleSocialBlock,
    LinkFooter,
    InstagramImg,
    FacebookImg,
} from './styled'
import { config } from '../../Config/ConfigText'

import instagram from '../../../assets/icons/instagram.svg';
import facebook from '../../../assets/icons/facebook.svg';

export const FooterYourOrdesPage = () => {
    return (
        <FooterWrapper>
            <FooterBlock>
                <AboutBlock>
                    <TitleAboutBlock>{config.heading.descriptionLibraryText}</TitleAboutBlock>
                    <LinkList>
                        <Link to='*'><LinkFooter>{config.links.navLinkAboutText}</LinkFooter></Link>
                        <Link to='*'><LinkFooter>{config.links.navLinkPrivacyText}</LinkFooter></Link>
                        <Link to='*'><LinkFooter>{config.links.navLinkContactText}</LinkFooter></Link>
                    </LinkList>
                </AboutBlock>
                <HelpBlock>
                    <TitleHelpBlock>{config.heading.listHelpText}</TitleHelpBlock>
                    <LinkList>
                       <Link to='*'><LinkFooter>{config.links.navLinkHelpText}</LinkFooter></Link> 
                       <Link to='*'><LinkFooter>{config.links.navLinkFaqsText}</LinkFooter></Link>
                    </LinkList>
                </HelpBlock>
                <MyAccountBlock>
                    <TitleMyAccountBlock>{config.heading.accountText}</TitleMyAccountBlock>
                    <LinkList>
                    <Link to='/settings'><LinkFooter>{config.links.navLinkProfileText}</LinkFooter></Link>
                    <Link to='/your-orders'><LinkFooter>{config.links.navLinkOrdersText}</LinkFooter></Link>
                    </LinkList>
                </MyAccountBlock>
                <ConnectedBlock>
                    <TitleSocialBlock>{config.heading.connectionText}</TitleSocialBlock>
                    <SocialBlock>
                    <a href='/'><InstagramImg src = { instagram }/></a>
                    <a href='/'><FacebookImg src = { facebook }/></a>
                    </SocialBlock>
                </ConnectedBlock>
            </FooterBlock>
        </FooterWrapper>
    );
};
