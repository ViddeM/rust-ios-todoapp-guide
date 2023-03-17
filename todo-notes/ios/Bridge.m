//
//  Bridge.m
//  todonotes
//
//  Created by Vidar Magnusson on 2023-03-16.
//

#import <Foundation/Foundation.h>
#import "Bridge.h"
#import "RustBindings.h"
#import <React/RCTLog.h>

@implementation SBridge

RCT_EXPORT_MODULE(SBridge);

RCT_EXPORT_METHOD(getNumber: (nonnull NSNumber *)number
                  callbackr: (RCTResponseSenderBlock)callback)
{
  NSInteger num = get_number(number.intValue);
  callback(@[@(num)]);
}

@end
