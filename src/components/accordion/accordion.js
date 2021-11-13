import Button from 'react-bootstrap/Button'
import React from "react";
import { Accordion } from "react-bootstrap";

import './accordion.scss'

function AccordionWrapper(props) {
   const isAdvanced = props.isAdvanced 
   const data = `[
        {
            "name": "db_server",
            "value": "azpdw1.database.windows.net",
            "slotSetting": false
        },
        {
            "name": "db_database",
            "value": "aztestdb",
            "slotSetting": false
        },
        {
            "name": "key_func_app",
            "value": "trimont-dev-portal-backend",
            "slotSetting": false
        },
        {
            "name": "subscriptions",
            "value": "0836cf02-64lb-4ala-8a25-d431aad72da8",
            "slotSetting": false
        },
        {
            "name": "key_resource_group",
            "value": "azdevrgtrimontapiservice",
            "slotSetting": false
        },
        {
            "name": "db_user",
            "value": "dwapi",
            "slotSetting": false
        },
    ]`
    const advancedData = `
    <EntityType Name="TriviewAsset">
    <Key>
        <PropertyRef Name="AssetPKID" />
    </Key>
    <Property Name="Records" Type="Edm.String" />
    <Property Name="DealPKID" Type="Edm.Int32" />
    <Property Name="DealID" Type="Edm.String" />
    <Property Name="DealDesc" Type="Edm.String" />
    <Property Name="AssetPKID" Type="Edm.Int32" Nullable="false" />
    <Property Name="AssetNbr" Type="Edm.String" />
    <Property Name="AssetName" Type="Edm.String" />
    <Property Name="LoanClassificationDesc" Type="Edm.String" />
    <Property Name="LoanClassificationCode" Type="Edm.String" />
    <Property Name="OriginationDate" Type="Edm.DateTimeOffset" Nullable="false" />
    <Property Name="PayoffDate" Type="Edm.DateTimeOffset" Nullable="false" />
    <Property Name="MaturityDate" Type="Edm.DateTimeOffset" Nullable="false" />
    <Property Name="MaximumMaturityDate" Type="Edm.DateTimeOffset" Nullable="false" />        
    <Property Name="CurrencyCode" Type="Edm.String" />
    `
  return (
    <div className="accordion-item-wrapper">
    <h4>{props.name}</h4>
      <Accordion defaultActiveKey="0">
        <Accordion.Item  eventKey={props.key}>
          <Accordion.Header >
            <div className='accordion-header-pos'>
              {isAdvanced ? '' : <Button variant="info">{props.btn}</Button>}
              <span>{props.link}</span>
            </div>
                
          </Accordion.Header>
          <Accordion.Body>
            <div className='accordeon-body'>
              <div className='json-area'>
                <pre>
                <code>
                {isAdvanced ? advancedData : data}
              </code>
                </pre>
              </div> 
            
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default AccordionWrapper;
