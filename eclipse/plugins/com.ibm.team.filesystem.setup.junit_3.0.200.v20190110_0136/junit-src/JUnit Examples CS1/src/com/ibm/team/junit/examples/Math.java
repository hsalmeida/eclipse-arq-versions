/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2005, 2010. All Rights Reserved.
 * 
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp. 
 *******************************************************************************/
package com.ibm.team.junit.examples;

import junit.framework.Assert;
import junit.framework.TestCase;

public class Math extends TestCase {
	public void testAddition() {
		int sum = 1 + 1;
		Assert.assertEquals(sum, 2);
	}
	
	public void testMultiplication() {
		int multiplication = 1 * 1;
		Assert.assertEquals(multiplication, 1);
	}
}
